#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
RUN_DIR="${BACKEND_DIR}/.run"
LOG_DIR="${RUN_DIR}/logs"
PID_DIR="${RUN_DIR}/pids"

mkdir -p "${LOG_DIR}" "${PID_DIR}"

wait_for_http() {
  local name="$1"
  local url="$2"
  local timeout_seconds="${3:-90}"

  local elapsed=0
  until curl --silent --fail "${url}" >/dev/null 2>&1; do
    if (( elapsed >= timeout_seconds )); then
      echo "❌ ${name} did not become healthy in ${timeout_seconds}s (${url})"
      return 1
    fi
    sleep 2
    elapsed=$((elapsed + 2))
  done

  echo "✅ ${name} is up"
}

start_module() {
  local module="$1"
  local health_url="$2"

  local pid_file="${PID_DIR}/${module}.pid"
  local log_file="${LOG_DIR}/${module}.log"

  if [[ -f "${pid_file}" ]]; then
    local existing_pid
    existing_pid="$(cat "${pid_file}")"
    if kill -0 "${existing_pid}" >/dev/null 2>&1; then
      echo "ℹ️  ${module} is already running (PID ${existing_pid})"
      return 0
    fi
  fi

  echo "▶️  Starting ${module}..."
  (
    cd "${BACKEND_DIR}"
    ./mvnw -q -pl "${module}" spring-boot:run -Dspring-boot.run.profiles=local >"${log_file}" 2>&1 &
    echo $! > "${pid_file}"
  )

  wait_for_http "${module}" "${health_url}"
}

echo "🚀 Starting backend stack with profile 'local'"

echo "1/6 discovery-service"
start_module "discovery-service" "http://localhost:8761/actuator/health"

echo "2/6 auth-service"
start_module "auth-service" "http://localhost:8081/actuator/health"

echo "3/6 chat-service"
start_module "chat-service" "http://localhost:8082/actuator/health"

echo "4/6 notification-service"
start_module "notification-service" "http://localhost:8083/actuator/health"

echo "5/6 service-service"
start_module "service-service" "http://localhost:8084/actuator/health"

echo "6/6 api-gateway"
start_module "api-gateway" "http://localhost:8080/actuator/health"

echo
echo "✅ All services started."
echo "Logs: ${LOG_DIR}"
echo "PIDs: ${PID_DIR}"
echo "Use scripts/stop-local.sh to stop everything."

#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
PID_DIR="${BACKEND_DIR}/.run/pids"

modules=(
  "api-gateway"
  "service-service"
  "notification-service"
  "chat-service"
  "auth-service"
  "discovery-service"
)

if [[ ! -d "${PID_DIR}" ]]; then
  echo "ℹ️  No PID directory found at ${PID_DIR}."
  exit 0
fi

for module in "${modules[@]}"; do
  pid_file="${PID_DIR}/${module}.pid"

  if [[ ! -f "${pid_file}" ]]; then
    continue
  fi

  pid="$(cat "${pid_file}")"
  if kill -0 "${pid}" >/dev/null 2>&1; then
    echo "⏹️  Stopping ${module} (PID ${pid})"
    kill "${pid}"
  else
    echo "ℹ️  ${module} was not running (stale PID ${pid})"
  fi

  rm -f "${pid_file}"
done

echo "✅ Stop signal sent to all tracked services."

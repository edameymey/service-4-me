'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import type { LoginErrors, LoginTouched } from '../types/login';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [touched, setTouched] = useState<LoginTouched>({
    email: false,
    password: false,
  });

  const canSubmit = useMemo(() => {
    return (
      EMAIL_PATTERN.test(formData.email.trim()) &&
      formData.password.trim().length > 0
    );
  }, [formData.email, formData.password]);

  const getEmailError = (email: string) => {
    if (!email.trim()) {
      return 'Email is required.';
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      return 'Enter a valid email address.';
    }
  };

  const getPasswordError = (password: string) => {
    if (!password.trim()) {
      return 'Password is required.';
    }
  };

  const handleBlur = (field: keyof LoginTouched) => {
    setTouched((previous) => ({
      ...previous,
      [field]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]:
        field === 'email'
          ? getEmailError(formData.email)
          : getPasswordError(formData.password),
    }));
  };

  const validate = () => {
    const nextErrors: LoginErrors = {
      email: getEmailError(formData.email),
      password: getPasswordError(formData.password),
    };

    setErrors(nextErrors);
    setTouched({ email: true, password: true });
    return !nextErrors.email && !nextErrors.password;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    console.log('login submit', {
      email: formData.email,
      password: formData.password,
      remember: formData.remember,
    });

    router.push('/');
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextEmail = event.target.value;

    setFormData((previous) => ({
      ...previous,
      email: nextEmail,
    }));

    if (touched.email) {
      setErrors((previous) => ({
        ...previous,
        email: getEmailError(nextEmail),
      }));
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextPassword = event.target.value;

    setFormData((previous) => ({
      ...previous,
      password: nextPassword,
    }));

    if (touched.password) {
      setErrors((previous) => ({
        ...previous,
        password: getPasswordError(nextPassword),
      }));
    }
  };

  const handleRememberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((previous) => ({
      ...previous,
      remember: event.target.checked,
    }));
  };

  return (
    <div className="auth-card">
      <div
        className="auth-tabs"
        role="tablist"
        aria-label="Authentication tabs"
      >
        <Link
          href="/login"
          className="auth-tab-link active"
          aria-current="page"
        >
          Login
        </Link>
        <Link href="/signup" className="auth-tab-link">
          Sign Up
        </Link>
      </div>

      <h1 className="auth-title">Welcome back</h1>
      <p className="auth-subtitle">
        Please enter your details to access your dashboard.
      </p>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <label className="auth-field-label" htmlFor="login-email">
          Email address
          <input
            id="login-email"
            type="email"
            className="auth-input"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur('email')}
          />
          {errors.email ? <p className="auth-error">{errors.email}</p> : null}
        </label>

        <label className="auth-field-label" htmlFor="login-password">
          Password
          <input
            id="login-password"
            type="password"
            className="auth-input"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handlePasswordChange}
            onBlur={() => handleBlur('password')}
          />
          {errors.password ? (
            <p className="auth-error">{errors.password}</p>
          ) : null}
        </label>

        <div className="auth-helper-row">
          <label className="auth-checkbox-row" htmlFor="remember-me">
            <input
              id="remember-me"
              type="checkbox"
              checked={formData.remember}
              onChange={handleRememberChange}
            />
            Remember me for 30 days
          </label>
          <Link href="/login" className="auth-link">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="auth-submit" disabled={!canSubmit}>
          Sign in
        </button>
      </form>

      <p className="auth-footer-note">
        Do not have an account?{' '}
        <Link href="/signup" className="auth-link">
          Create a free account
        </Link>
      </p>
    </div>
  );
}

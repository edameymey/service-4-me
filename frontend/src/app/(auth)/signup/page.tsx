'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useMemo, useState } from 'react';
import { SignupErrors, SignupTouched } from '../types/signup';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9\s\-()]{7,20}$/;

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [touched, setTouched] = useState<SignupTouched>({
    fullName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });

  const isValidPhoneNumber = (phoneNumber: string) => {
    const trimmed = phoneNumber.trim();
    const digitsOnly = trimmed.replace(/\D/g, '');

    return (
      PHONE_PATTERN.test(trimmed) &&
      digitsOnly.length >= 7 &&
      digitsOnly.length <= 15
    );
  };

  const canSubmit = useMemo(() => {
    return (
      formData.fullName.trim().length > 0 &&
      EMAIL_PATTERN.test(formData.email.trim()) &&
      isValidPhoneNumber(formData.phoneNumber) &&
      formData.password.length >= 8 &&
      formData.confirmPassword.length > 0 &&
      formData.confirmPassword === formData.password
    );
  }, [
    formData.confirmPassword,
    formData.email,
    formData.phoneNumber,
    formData.fullName,
    formData.password,
  ]);

  const getFieldError = (
    field: keyof SignupTouched,
    values = formData,
  ): string | undefined => {
    if (field === 'fullName') {
      return values.fullName.trim() ? undefined : 'Full name is required.';
    }

    if (field === 'email') {
      if (!values.email.trim()) {
        return 'Email is required.';
      }

      return EMAIL_PATTERN.test(values.email.trim())
        ? undefined
        : 'Enter a valid email address.';
    }

    if (field === 'phoneNumber') {
      if (!values.phoneNumber.trim()) {
        return 'Phone number is required.';
      }

      return isValidPhoneNumber(values.phoneNumber)
        ? undefined
        : 'Please enter a valid phone number.';
    }

    if (field === 'password') {
      if (!values.password) {
        return 'Password is required.';
      }

      return values.password.length >= 8
        ? undefined
        : 'Password must be at least 8 characters.';
    }

    if (!values.confirmPassword) {
      return 'Please confirm your password.';
    }

    return values.confirmPassword === values.password
      ? undefined
      : 'Passwords must match.';
  };

  const handleBlur = (field: keyof SignupTouched) => {
    setTouched((previous) => ({
      ...previous,
      [field]: true,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: getFieldError(field),
      ...(field === 'password' && touched.confirmPassword
        ? { confirmPassword: getFieldError('confirmPassword') }
        : {}),
    }));
  };

  const handleFieldChange = (field: keyof SignupTouched, value: string) => {
    setFormData((previous) => {
      const nextValues = {
        ...previous,
        [field]: value,
      };

      setErrors((previousErrors) => ({
        ...previousErrors,
        ...(touched[field]
          ? { [field]: getFieldError(field, nextValues) }
          : {}),
        ...(field === 'password' && touched.confirmPassword
          ? {
              confirmPassword: getFieldError('confirmPassword', nextValues),
            }
          : {}),
      }));

      return nextValues;
    });
  };

  const validate = () => {
    const nextErrors: SignupErrors = {
      fullName: getFieldError('fullName'),
      email: getFieldError('email'),
      phoneNumber: getFieldError('phoneNumber'),
      password: getFieldError('password'),
      confirmPassword: getFieldError('confirmPassword'),
    };

    setErrors(nextErrors);
    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
      password: true,
      confirmPassword: true,
    });
    return (
      !nextErrors.fullName &&
      !nextErrors.email &&
      !nextErrors.phoneNumber &&
      !nextErrors.password &&
      !nextErrors.confirmPassword
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    console.log('signup submit', {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });

    router.push('/');
  };

  return (
    <div className="auth-card">
      <div
        className="auth-tabs"
        role="tablist"
        aria-label="Authentication tabs"
      >
        <Link href="/login" className="auth-tab-link">
          Login
        </Link>
        <Link
          href="/signup"
          className="auth-tab-link active"
          aria-current="page"
        >
          Sign Up
        </Link>
      </div>

      <h1 className="auth-title">Create account</h1>
      <p className="auth-subtitle">
        Start trading skills with your local community.
      </p>

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <label className="auth-field-label" htmlFor="signup-name">
          Full name*
          <input
            id="signup-name"
            type="text"
            className="auth-input"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={(event) =>
              handleFieldChange('fullName', event.target.value)
            }
            onBlur={() => handleBlur('fullName')}
          />
          {errors.fullName ? (
            <p className="auth-error">{errors.fullName}</p>
          ) : null}
        </label>

        <label className="auth-field-label" htmlFor="signup-email">
          Email address*
          <input
            id="signup-email"
            type="email"
            className="auth-input"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(event) => handleFieldChange('email', event.target.value)}
            onBlur={() => handleBlur('email')}
          />
          {errors.email ? <p className="auth-error">{errors.email}</p> : null}
        </label>

        <label className="auth-field-label" htmlFor="signup-phone-number">
          Phone number*
          <input
            id="signup-phone-number"
            type="tel"
            className="auth-input"
            placeholder="+40 700 000 000"
            value={formData.phoneNumber}
            onChange={(event) =>
              handleFieldChange('phoneNumber', event.target.value)
            }
            onBlur={() => handleBlur('phoneNumber')}
          />
          {errors.phoneNumber ? (
            <p className="auth-error">{errors.phoneNumber}</p>
          ) : null}
        </label>

        <label className="auth-field-label" htmlFor="signup-password">
          Password*
          <input
            id="signup-password"
            type="password"
            className="auth-input"
            placeholder="Create a password"
            value={formData.password}
            onChange={(event) =>
              handleFieldChange('password', event.target.value)
            }
            onBlur={() => handleBlur('password')}
          />
          {errors.password ? (
            <p className="auth-error">{errors.password}</p>
          ) : null}
        </label>

        <label className="auth-field-label" htmlFor="signup-confirm-password">
          Confirm password*
          <input
            id="signup-confirm-password"
            type="password"
            className="auth-input"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={(event) =>
              handleFieldChange('confirmPassword', event.target.value)
            }
            onBlur={() => handleBlur('confirmPassword')}
          />
          {errors.confirmPassword ? (
            <p className="auth-error">{errors.confirmPassword}</p>
          ) : null}
        </label>

        <button type="submit" className="auth-submit" disabled={!canSubmit}>
          Create account
        </button>
      </form>

      <p className="auth-footer-note">
        Already have an account?{' '}
        <Link href="/login" className="auth-link">
          Sign in
        </Link>
      </p>
    </div>
  );
}

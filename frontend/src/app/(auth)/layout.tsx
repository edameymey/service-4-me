import React from 'react';
import './auth.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="auth-shell" lang="en">
      <section className="auth-left-panel" aria-hidden="true">
        <div className="auth-left-overlay" />
        <div className="auth-left-content">
          <div className="auth-brand-row">
            <span className="auth-brand-icon">
              <img
                src="/logo/logo_it.png"
                alt=""
                className="auth-brand-icon-image"
              />
            </span>
            <p className="auth-brand-name">Service4Me</p>
          </div>

          <h1 className="auth-left-title">Trade hours, not dollars.</h1>
          <p className="auth-left-description">
            Connect with people nearby to share what you do best and get help
            with what you need, from gardening to coding and everything in
            between.
          </p>

          <div className="auth-left-features">
            <div className="auth-feature-item">Trusted local neighbors</div>
            <div className="auth-feature-item">
              Safe and easy skill swapping
            </div>
          </div>
        </div>
      </section>

      <section className="auth-right-panel">{children}</section>
    </main>
  );
}

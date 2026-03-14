'use client';

import {
  forwardRef,
  type ForwardedRef,
  type ReactNode,
  useRef,
  useState,
} from 'react';

type PrivacyOption = 'public' | 'members';
type ActiveAccountModal = 'password' | 'phone' | null;
type PasswordModalErrors = {
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};
type PhoneModalErrors = {
  currentPhoneNumber?: string;
  newPhoneNumber?: string;
};

const ROMANIAN_PHONE_PATTERN = /^\+40 7\d{2} \d{3} \d{3}$/;

const accountItems = [
  {
    id: 'email',
    label: 'Email Address',
    value: 'alex.smith@example.com',
    icon: 'mail',
  },
  {
    id: 'password',
    label: 'Password',
    value: 'Last changed 45 days ago',
    icon: 'lock',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    value: '+1 (555) 982-0123',
    icon: 'phone',
  },
] as const;

const privacyOptions = [
  {
    id: 'public',
    label: 'Public (Everyone)',
    description: 'Visible to all users across the platform.',
  },
  {
    id: 'members',
    label: 'Community Members Only',
    description: 'Only signed-in members can find your skills.',
  },
] as const satisfies ReadonlyArray<{
  id: PrivacyOption;
  label: string;
  description: string;
}>;

const SettingsPage = () => {
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState(true);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    useState(true);
  const [privacyOption, setPrivacyOption] = useState<PrivacyOption>('members');
  const notificationPreferencesRef = useRef<HTMLElement | null>(null);
  const [activeAccountModal, setActiveAccountModal] =
    useState<ActiveAccountModal>(null);
  const [currentPhoneNumber, setCurrentPhoneNumber] =
    useState('+40 712 345 678');
  const [passwordFields, setPasswordFields] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [phoneFields, setPhoneFields] = useState({
    currentPhoneNumber: '',
    newPhoneNumber: '',
  });
  const [passwordModalErrors, setPasswordModalErrors] =
    useState<PasswordModalErrors>({});
  const [phoneModalErrors, setPhoneModalErrors] = useState<PhoneModalErrors>(
    {},
  );

  const logAction = (action: string, payload?: Record<string, unknown>) => {
    console.log('[settings-action]', {
      action,
      ...payload,
    });
  };

  const handleAccountAction = (section: string) => {
    logAction('open-account-setting', { section });
  };

  const closeAccountModal = () => {
    setActiveAccountModal(null);
    setPasswordModalErrors({});
    setPhoneModalErrors({});
  };

  const openPasswordModal = () => {
    handleAccountAction('password');
    setPasswordFields({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
    setPasswordModalErrors({});
    setActiveAccountModal('password');
  };

  const openPhoneModal = () => {
    handleAccountAction('phone');
    setPhoneFields({
      currentPhoneNumber,
      newPhoneNumber: '',
    });
    setPhoneModalErrors({});
    setActiveAccountModal('phone');
  };

  const handlePasswordFieldChange = (
    field: 'currentPassword' | 'newPassword' | 'confirmNewPassword',
    value: string,
  ) => {
    setPasswordFields((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handlePhoneFieldChange = (
    field: 'currentPhoneNumber' | 'newPhoneNumber',
    value: string,
  ) => {
    setPhoneFields((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const validatePasswordModal = () => {
    const nextErrors: PasswordModalErrors = {};

    if (passwordFields.currentPassword.trim().length === 0) {
      nextErrors.currentPassword = 'Current password is required.';
    }

    if (passwordFields.newPassword.trim().length === 0) {
      nextErrors.newPassword = 'New password is required.';
    }

    if (passwordFields.confirmNewPassword.trim().length === 0) {
      nextErrors.confirmNewPassword = 'Please confirm your new password.';
    } else if (
      passwordFields.newPassword !== passwordFields.confirmNewPassword
    ) {
      nextErrors.confirmNewPassword = 'New passwords do not match.';
    }

    setPasswordModalErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validatePhoneModal = () => {
    const nextErrors: PhoneModalErrors = {};

    if (phoneFields.currentPhoneNumber.trim().length === 0) {
      nextErrors.currentPhoneNumber = 'Current phone number is required.';
    } else if (!ROMANIAN_PHONE_PATTERN.test(phoneFields.currentPhoneNumber)) {
      nextErrors.currentPhoneNumber = 'Use the +40 7XX XXX XXX phone format.';
    }

    if (phoneFields.newPhoneNumber.trim().length === 0) {
      nextErrors.newPhoneNumber = 'New phone number is required.';
    } else if (!ROMANIAN_PHONE_PATTERN.test(phoneFields.newPhoneNumber)) {
      nextErrors.newPhoneNumber = 'Use the +40 7XX XXX XXX phone format.';
    }

    setPhoneModalErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePasswordSubmit = () => {
    if (!validatePasswordModal()) {
      return;
    }

    logAction('update-password', {
      currentPassword: passwordFields.currentPassword,
      newPassword: passwordFields.newPassword,
    });
    closeAccountModal();
  };

  const handlePhoneSubmit = () => {
    if (!validatePhoneModal()) {
      return;
    }

    setCurrentPhoneNumber(phoneFields.newPhoneNumber);
    logAction('update-phone-number', {
      currentPhoneNumber: phoneFields.currentPhoneNumber,
      newPhoneNumber: phoneFields.newPhoneNumber,
    });
    closeAccountModal();
  };

  const handleOpenNotifications = () => {
    notificationPreferencesRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    logAction('settings-notifications-click');
  };

  const handleToggleEmailAlerts = () => {
    setEmailAlertsEnabled((previous) => {
      const next = !previous;
      logAction('toggle-email-alerts', { enabled: next });
      return next;
    });
  };

  const handleTogglePushNotifications = () => {
    setPushNotificationsEnabled((previous) => {
      const next = !previous;
      logAction('toggle-push-notifications', { enabled: next });
      return next;
    });
  };

  const handlePrivacyChange = (option: PrivacyOption) => {
    setPrivacyOption(option);
    logAction('change-privacy-option', { option });
  };

  const handleDeactivateAccount = () => {
    logAction('deactivate-account-click');
  };

  return (
    <section className="rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-4 py-5 sm:px-6 sm:py-7">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <div className="rounded-[26px] border border-[#dfe3e8] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(34,51,84,0.04)] sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#edf4e7] text-[#6a9660]">
                <SettingsIcon />
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight text-[#253042] sm:text-xl">
                  Settings
                </h1>
                <p className="text-sm text-[#8a97a6]">
                  Manage your account, preferences, and privacy.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleOpenNotifications}
                aria-label="Open notifications"
                className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e8dc] bg-[#f8faf6] text-[#7f8b99] transition hover:bg-[#eef3e8]"
              >
                <BellIcon />
              </button>
            </div>
          </div>
        </div>

        <SettingsSection title="Account">
          <div className="overflow-hidden rounded-[24px] border border-[#e3e8ee] bg-white">
            <div className="flex items-center gap-4 border-b border-[#edf1f4] px-4 py-4 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f6ef] text-[#91a0b0]">
                  <AccountItemIcon icon="mail" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#253042]">
                    Email Address
                  </p>
                  <p className="text-xs text-[#8f9baa]">
                    alex.smith@example.com
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={openPasswordModal}
              className="flex w-full items-center justify-between gap-4 border-b border-[#edf1f4] px-4 py-4 text-left transition hover:bg-[#f9fbf8] sm:px-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f6ef] text-[#91a0b0]">
                  <AccountItemIcon icon="lock" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#253042]">
                    Password
                  </p>
                  <p className="text-xs text-[#8f9baa]">
                    Last changed 45 days ago
                  </p>
                </div>
              </div>

              <ChevronRightIcon />
            </button>

            <button
              type="button"
              onClick={openPhoneModal}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-[#f9fbf8] sm:px-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f6ef] text-[#91a0b0]">
                  <AccountItemIcon icon="phone" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#253042]">
                    Phone Number
                  </p>
                  <p className="text-xs text-[#8f9baa]">{currentPhoneNumber}</p>
                </div>
              </div>

              <ChevronRightIcon />
            </button>
          </div>
        </SettingsSection>

        <SettingsSection
          ref={notificationPreferencesRef}
          title="Notification Preferences"
        >
          <div className="overflow-hidden rounded-[24px] border border-[#e3e8ee] bg-white">
            <PreferenceRow
              title="Email Alerts"
              description="Receive summaries of new barter opportunities"
              enabled={emailAlertsEnabled}
              onToggle={handleToggleEmailAlerts}
            />
            <PreferenceRow
              title="Push Notifications"
              description="Instant alerts for new trade requests"
              enabled={pushNotificationsEnabled}
              onToggle={handleTogglePushNotifications}
              hasBorder={false}
            />
          </div>
        </SettingsSection>

        <SettingsSection title="Privacy">
          <div className="rounded-[24px] border border-[#e3e8ee] bg-white p-4 sm:p-5">
            <div>
              <h2 className="text-base font-bold text-[#253042]">
                Who can see my skills?
              </h2>
              <p className="mt-1 text-sm text-[#8f9baa]">
                Choose who can find you in the skill search.
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {privacyOptions.map((option) => {
                const isSelected = privacyOption === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handlePrivacyChange(option.id)}
                    className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      isSelected
                        ? 'border-[#aac69d] bg-[#f8fbf5]'
                        : 'border-[#ecf0f3] bg-white hover:bg-[#fafcf9]'
                    }`}
                  >
                    <span
                      className={`mt-1 flex h-4 w-4 items-center justify-center rounded-full border ${
                        isSelected
                          ? 'border-[#6d9b66] text-[#6d9b66]'
                          : 'border-[#b8c3cf] text-transparent'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#253042]">
                        {option.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-[#8f9baa]">
                        {option.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </SettingsSection>

        <div className="rounded-[24px] border border-[#f2cccc] bg-[#fff5f4] p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-bold text-[#d14343]">
                Deactivate Account
              </h2>
              <p className="mt-1 text-xs text-[#e07a7a]">
                This action is permanent and cannot be undone.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDeactivateAccount}
              className="inline-flex items-center justify-center rounded-full border border-[#f0b8b8] bg-white px-5 py-2 text-sm font-semibold text-[#d14343] transition hover:bg-[#fff0f0]"
            >
              Close Account
            </button>
          </div>
        </div>
      </div>

      {activeAccountModal === 'password' ? (
        <AccountModal
          title="Change Password"
          onClose={closeAccountModal}
          onSubmit={handlePasswordSubmit}
          submitLabel="Save Password"
        >
          <ModalField
            label="Current Password"
            type="password"
            value={passwordFields.currentPassword}
            onChange={(value) =>
              handlePasswordFieldChange('currentPassword', value)
            }
            placeholder="Enter current password"
            error={passwordModalErrors.currentPassword}
          />
          <ModalField
            label="New Password"
            type="password"
            value={passwordFields.newPassword}
            onChange={(value) =>
              handlePasswordFieldChange('newPassword', value)
            }
            placeholder="Enter new password"
            error={passwordModalErrors.newPassword}
          />
          <ModalField
            label="Confirm New Password"
            type="password"
            value={passwordFields.confirmNewPassword}
            onChange={(value) =>
              handlePasswordFieldChange('confirmNewPassword', value)
            }
            placeholder="Confirm new password"
            error={passwordModalErrors.confirmNewPassword}
          />
        </AccountModal>
      ) : null}

      {activeAccountModal === 'phone' ? (
        <AccountModal
          title="Change Phone Number"
          onClose={closeAccountModal}
          onSubmit={handlePhoneSubmit}
          submitLabel="Save Phone Number"
        >
          <ModalField
            label="Current Phone Number"
            value={phoneFields.currentPhoneNumber}
            onChange={(value) =>
              handlePhoneFieldChange('currentPhoneNumber', value)
            }
            placeholder="+40 7XX XXX XXX"
            error={phoneModalErrors.currentPhoneNumber}
          />
          <ModalField
            label="New Phone Number"
            value={phoneFields.newPhoneNumber}
            onChange={(value) =>
              handlePhoneFieldChange('newPhoneNumber', value)
            }
            placeholder="+40 7XX XXX XXX"
            error={phoneModalErrors.newPhoneNumber}
          />
          <p className="text-xs text-[#8f9baa]">
            Phone number format: +40 7XX XXX XXX
          </p>
        </AccountModal>
      ) : null}
    </section>
  );
};

const AccountModal = ({
  title,
  children,
  submitLabel,
  onClose,
  onSubmit,
}: {
  title: string;
  children: ReactNode;
  submitLabel: string;
  onClose: () => void;
  onSubmit: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#253042]/35 px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#dfe3e8] bg-white p-5 shadow-[0_20px_45px_rgba(37,48,66,0.22)] sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[#253042]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid h-8 w-8 place-items-center rounded-full bg-[#f2f5f8] text-[#7f8b99] transition hover:bg-[#e8edf2]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-3">{children}</div>

        <div className="mt-5 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#dfe5eb] bg-white px-4 py-2 text-sm font-semibold text-[#667382] transition hover:bg-[#f7f9fb]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-full bg-[#709b68] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#63885c]"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: 'text' | 'password';
  error?: string;
}) => {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-[#253042]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-white px-3 py-2.5 text-sm text-[#253042] outline-none transition placeholder:text-[#a1acb7] focus:border-[#97b88d] focus:ring-2 focus:ring-[#dcead4] ${
          error ? 'border-[#e29a9a]' : 'border-[#dfe5eb]'
        }`}
      />
      {error ? (
        <span className="mt-1 block text-xs text-[#d14343]">{error}</span>
      ) : null}
    </label>
  );
};

const SettingsSectionBase = (
  {
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  },
  ref: ForwardedRef<HTMLElement>,
) => {
  return (
    <section ref={ref}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#96a2b1]">
        {title}
      </p>
      {children}
    </section>
  );
};

const SettingsSection = forwardRef(SettingsSectionBase);

const PreferenceRow = ({
  title,
  description,
  enabled,
  onToggle,
  hasBorder = true,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  hasBorder?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
        hasBorder ? 'border-b border-[#edf1f4]' : ''
      }`}
    >
      <div>
        <p className="text-sm font-semibold text-[#253042]">{title}</p>
        <p className="text-xs text-[#8f9baa]">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
          enabled ? 'bg-[#88ab7d]' : 'bg-[#d6dce2]'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

const AccountItemIcon = ({ icon }: { icon: 'mail' | 'lock' | 'phone' }) => {
  if (icon === 'mail') {
    return <MailIcon />;
  }

  if (icon === 'lock') {
    return <LockIcon />;
  }

  return <PhoneIcon />;
};

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12 2l1.9 2.1 2.8-.4.7 2.8 2.5 1.3-1.3 2.5 1.3 2.5-2.5 1.3-.7 2.8-2.8-.4L12 22l-1.9-2.1-2.8.4-.7-2.8-2.5-1.3 1.3-2.5-1.3-2.5 2.5-1.3.7-2.8 2.8.4L12 2zm0 6.5A3.5 3.5 0 1012 15a3.5 3.5 0 000-7z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 6h16v12H4z" />
    <path d="M4 8l8 5 8-5" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 118 0v3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 3h4l2 5-2.5 2.5a16 16 0 007 7L19 15l5 2v4a2 2 0 01-2 2C10.4 23 1 13.6 1 2a2 2 0 012-2h3z" />
  </svg>
);

const BellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 17H5l1.4-1.4A2 2 0 007 14.2V11a5 5 0 1110 0v3.2a2 2 0 00.6 1.4L19 17h-4" />
    <path d="M10 20a2 2 0 004 0" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-[#a3adba]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 6l12 12" />
    <path d="M18 6l-12 12" />
  </svg>
);

export default SettingsPage;

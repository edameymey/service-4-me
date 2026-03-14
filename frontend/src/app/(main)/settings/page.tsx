'use client';

import { useRef, useState } from 'react';
import {
  PrivacyOptions,
  ActiveAccountModals,
  PasswordModalErrors,
  PhoneModalErrors,
} from './types/settings';
import { AccountModal } from './components/AccountModal';
import { AccountSection } from './components/AccountSection';
import { DeactivateAccountSection } from './components/DeactivateAccountSection';
import { ModalField } from './components/ModalField';
import { NotificationPreferencesSection } from './components/NotificationPreferencesSection';
import { PrivacySection } from './components/PrivacySection';
import { SettingsHeader } from './components/SettingsHeader';

const ROMANIAN_PHONE_PATTERN = /^\+40 7\d{2} \d{3} \d{3}$/;

const SettingsPage = () => {
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState(true);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    useState(true);
  const [privacyOption, setPrivacyOption] = useState<PrivacyOptions>(
    PrivacyOptions.MEMBERS,
  );
  const notificationPreferencesRef = useRef<HTMLElement | null>(null);
  const [activeAccountModal, setActiveAccountModal] =
    useState<ActiveAccountModals | null>(null);
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
    setActiveAccountModal(ActiveAccountModals.PASSWORD);
  };

  const openPhoneModal = () => {
    handleAccountAction('phone');
    setPhoneFields({
      currentPhoneNumber,
      newPhoneNumber: '',
    });
    setPhoneModalErrors({});
    setActiveAccountModal(ActiveAccountModals.PHONE);
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

  const handlePrivacyChange = (option: PrivacyOptions) => {
    setPrivacyOption(option);
    logAction('change-privacy-option', { option });
  };

  const handleDeactivateAccount = () => {
    logAction('deactivate-account-click');
  };

  return (
    <section className="rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-4 py-5 sm:px-6 sm:py-7">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
        <SettingsHeader onOpenNotifications={handleOpenNotifications} />

        <AccountSection
          currentPhoneNumber={currentPhoneNumber}
          onOpenPasswordModal={openPasswordModal}
          onOpenPhoneModal={openPhoneModal}
        />

        <NotificationPreferencesSection
          sectionRef={notificationPreferencesRef}
          emailAlertsEnabled={emailAlertsEnabled}
          pushNotificationsEnabled={pushNotificationsEnabled}
          onToggleEmailAlerts={handleToggleEmailAlerts}
          onTogglePushNotifications={handleTogglePushNotifications}
        />

        <PrivacySection
          privacyOption={privacyOption}
          onPrivacyChange={handlePrivacyChange}
        />

        <DeactivateAccountSection onDeactivate={handleDeactivateAccount} />
      </div>

      {activeAccountModal === ActiveAccountModals.PASSWORD ? (
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

      {activeAccountModal === ActiveAccountModals.PHONE ? (
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

export default SettingsPage;

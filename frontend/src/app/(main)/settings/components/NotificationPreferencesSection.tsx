import type { Ref } from 'react';
import { PreferenceRow } from './PreferenceRow';
import { SettingsSection } from './SettingsSection';

type NotificationPreferencesSectionProps = {
  sectionRef: Ref<HTMLElement>;
  emailAlertsEnabled: boolean;
  pushNotificationsEnabled: boolean;
  onToggleEmailAlerts: () => void;
  onTogglePushNotifications: () => void;
};

export const NotificationPreferencesSection = ({
  sectionRef,
  emailAlertsEnabled,
  pushNotificationsEnabled,
  onToggleEmailAlerts,
  onTogglePushNotifications,
}: NotificationPreferencesSectionProps) => {
  return (
    <SettingsSection title="Notification Preferences" sectionRef={sectionRef}>
      <div className="overflow-hidden rounded-[24px] border border-[#e3e8ee] bg-white">
        <PreferenceRow
          title="Email Alerts"
          description="Receive summaries of new barter opportunities"
          enabled={emailAlertsEnabled}
          onToggle={onToggleEmailAlerts}
        />
        <PreferenceRow
          title="Push Notifications"
          description="Instant alerts for new trade requests"
          enabled={pushNotificationsEnabled}
          onToggle={onTogglePushNotifications}
          hasBorder={false}
        />
      </div>
    </SettingsSection>
  );
};

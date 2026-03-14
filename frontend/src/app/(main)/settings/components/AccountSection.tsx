import { ACCOUNT_ITEMS } from '../constants/settings';
import { ChevronRightIcon } from '../svgs/ChevronRightIcon';
import { AccountItemIcon } from './AccountItemIcon';
import { SettingsSection } from './SettingsSection';

type AccountSectionProps = {
  currentPhoneNumber: string;
  onOpenPasswordModal: () => void;
  onOpenPhoneModal: () => void;
};

export const AccountSection = ({
  currentPhoneNumber,
  onOpenPasswordModal,
  onOpenPhoneModal,
}: AccountSectionProps) => {
  const emailItem = ACCOUNT_ITEMS.find((item) => item.id === 'email');
  const passwordItem = ACCOUNT_ITEMS.find((item) => item.id === 'password');
  const phoneItem = ACCOUNT_ITEMS.find((item) => item.id === 'phone');

  if (!emailItem || !passwordItem || !phoneItem) {
    return null;
  }

  return (
    <SettingsSection title="Account">
      <div className="overflow-hidden rounded-[24px] border border-[#e3e8ee] bg-white">
        <div className="flex items-center gap-4 border-b border-[#edf1f4] px-4 py-4 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f6ef] text-[#91a0b0]">
              <AccountItemIcon icon={emailItem.icon} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#253042]">
                {emailItem.label}
              </p>
              <p className="text-xs text-[#8f9baa]">{emailItem.value}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenPasswordModal}
          className="flex w-full items-center justify-between gap-4 border-b border-[#edf1f4] px-4 py-4 text-left transition hover:bg-[#f9fbf8] sm:px-5"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f6ef] text-[#91a0b0]">
              <AccountItemIcon icon={passwordItem.icon} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#253042]">
                {passwordItem.label}
              </p>
              <p className="text-xs text-[#8f9baa]">{passwordItem.value}</p>
            </div>
          </div>

          <ChevronRightIcon />
        </button>

        <button
          type="button"
          onClick={onOpenPhoneModal}
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-[#f9fbf8] sm:px-5"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f3f6ef] text-[#91a0b0]">
              <AccountItemIcon icon={phoneItem.icon} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#253042]">
                {phoneItem.label}
              </p>
              <p className="text-xs text-[#8f9baa]">{currentPhoneNumber}</p>
            </div>
          </div>

          <ChevronRightIcon />
        </button>
      </div>
    </SettingsSection>
  );
};

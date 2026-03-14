import { BellIcon } from '../svgs/BellIcon';
import { SettingsIcon } from '../svgs/SettingsIcon';

type SettingsHeaderProps = {
  onOpenNotifications: () => void;
};

export const SettingsHeader = ({
  onOpenNotifications,
}: SettingsHeaderProps) => {
  return (
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
            onClick={onOpenNotifications}
            aria-label="Open notifications"
            className="grid h-10 w-10 place-items-center rounded-full border border-[#e2e8dc] bg-[#f8faf6] text-[#7f8b99] transition hover:bg-[#eef3e8]"
          >
            <BellIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

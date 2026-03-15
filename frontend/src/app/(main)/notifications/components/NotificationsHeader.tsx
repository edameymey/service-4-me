import { BellIcon } from '../svgs/BellIcon';
import { NotificationsHeaderProps } from '../types/notifications';

export const NotificationsHeader = ({
  unreadCount,
  onMarkAllAsRead,
}: NotificationsHeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-3 rounded-[26px] border border-[#dfe3e8] bg-white px-5 py-4 shadow-[0_12px_32px_rgba(34,51,84,0.05)] sm:px-6">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#edf4e7] text-[#6a9660]">
          <BellIcon />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-[#253042] sm:text-xl">
            Notifications
          </h1>
          <p className="text-xs text-[#8f9baa]">
            {unreadCount > 0
              ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
              : 'Everything is up to date'}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onMarkAllAsRead}
        className="rounded-full bg-[#709b68] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#63885c] sm:text-sm"
      >
        Mark all as read
      </button>
    </header>
  );
};

import { GROUP_LABELS, GROUP_ORDER } from '../constants/notifications';
import { NotificationsListProps } from '../types/notifications';
import { NotificationRow } from './NotificationRow';

export const NotificationsList = ({
  notifications,
  onMarkOneAsRead,
  onOpenNotificationMenu,
}: NotificationsListProps) => {
  return (
    <div className="px-5 py-4 sm:px-6">
      {GROUP_ORDER.map((group) => {
        const groupItems = notifications.filter((item) => item.group === group);

        if (groupItems.length === 0) {
          return null;
        }

        return (
          <div key={group} className="mb-6 last:mb-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[#a2adba]">
              {GROUP_LABELS[group]}
            </p>

            <div className="rounded-2xl border border-[#eef2f5] bg-white">
              {groupItems.map((item, index) => (
                <NotificationRow
                  key={item.id}
                  item={item}
                  hasBorder={index !== groupItems.length - 1}
                  onMarkOneAsRead={onMarkOneAsRead}
                  onOpenNotificationMenu={onOpenNotificationMenu}
                />
              ))}
            </div>
          </div>
        );
      })}

      {notifications.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#dbe2e8] bg-[#fafcfd] px-4 py-10 text-center">
          <p className="text-sm font-semibold text-[#516171]">
            No trade requests yet.
          </p>
          <p className="mt-1 text-xs text-[#8f9baa]">
            New trade notifications will appear here.
          </p>
        </div>
      ) : null}
    </div>
  );
};

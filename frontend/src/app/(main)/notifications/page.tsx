'use client';

import { useMemo, useState } from 'react';
import { NotificationsHeader } from './components/NotificationsHeader';
import { NotificationsList } from './components/NotificationsList';
import { TradeRequestsLabel } from './components/TradeRequestsLabel';
import { INITIAL_NOTIFICATIONS } from './constants/notifications';
import { NotificationEntry, NotificationItem } from './types/notifications';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<NotificationEntry[]>(
    INITIAL_NOTIFICATIONS,
  );

  const tradeNotifications = useMemo(() => {
    return notifications.filter((item) => item.tab === NotificationItem.TRADE);
  }, [notifications]);

  const unreadCount = useMemo(() => {
    return notifications.filter((item) => item.unread).length;
  }, [notifications]);

  const handleMarkAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((item) => ({
        ...item,
        unread: false,
      })),
    );

    console.log('[notifications-action]', { action: 'mark-all-as-read' });
  };

  const handleMarkOneAsRead = (id: string) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              unread: false,
            }
          : item,
      ),
    );

    console.log('[notifications-action]', {
      action: 'mark-one-as-read',
      notificationId: id,
    });
  };

  const handleOpenNotificationMenu = (id: string) => {
    console.log('[notifications-action]', {
      action: 'open-notification-menu',
      notificationId: id,
    });
  };

  return (
    <section className="min-h-[calc(100vh-80px)] rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-4 py-5 sm:px-6 sm:py-7">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <NotificationsHeader
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
        />

        <TradeRequestsLabel />

        <div className="overflow-hidden rounded-[26px] border border-[#dfe3e8] bg-white shadow-[0_12px_32px_rgba(34,51,84,0.05)]">
          <NotificationsList
            notifications={tradeNotifications}
            onMarkOneAsRead={handleMarkOneAsRead}
            onOpenNotificationMenu={handleOpenNotificationMenu}
          />
        </div>
      </div>
    </section>
  );
};

export default NotificationsPage;

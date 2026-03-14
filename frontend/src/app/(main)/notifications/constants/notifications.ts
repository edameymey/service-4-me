import {
  NotificationEntry,
  NotificationGroup,
  NotificationItem,
} from '../types/notifications';

export const INITIAL_NOTIFICATIONS: NotificationEntry[] = [
  {
    id: 'n1',
    tab: NotificationItem.TRADE,
    group: NotificationGroup.TODAY,
    title: 'Emma sent you a trade request!',
    subtitle: '2 minutes ago',
    avatarLabel: 'E',
    avatarColor: '#f3c69e',
    unread: true,
  },
  {
    id: 'n2',
    tab: NotificationItem.SYSTEM,
    group: NotificationGroup.TODAY,
    title: 'Your Math skill was favorited by 3 people',
    subtitle: '1 hour ago',
    avatarLabel: 'S',
    avatarColor: '#dde9dd',
    unread: false,
  },
  {
    id: 'n3',
    tab: NotificationItem.TRADE,
    group: NotificationGroup.YESTERDAY,
    title: 'Marcus accepted your trade for Web Development',
    subtitle: 'Yesterday, 4:20 PM',
    avatarLabel: 'M',
    avatarColor: '#cdd6e4',
    unread: false,
  },
  {
    id: 'n4',
    tab: NotificationItem.SYSTEM,
    group: NotificationGroup.YESTERDAY,
    title: 'System Update: New "Skill Bundles" feature is now live!',
    subtitle: 'Yesterday, 10:15 AM',
    avatarLabel: 'U',
    avatarColor: '#d7e3f2',
    unread: false,
  },
  {
    id: 'n5',
    tab: NotificationItem.MESSAGES,
    group: NotificationGroup.EARLIER,
    title: 'David left you a 5-star review!',
    subtitle: '3 days ago',
    avatarLabel: 'D',
    avatarColor: '#d8d8d8',
    unread: false,
  },
];

export const GROUP_LABELS: Record<NotificationGroup, string> = {
  [NotificationGroup.TODAY]: 'Today',
  [NotificationGroup.YESTERDAY]: 'Yesterday',
  [NotificationGroup.EARLIER]: 'Earlier This Week',
};

export const GROUP_ORDER: NotificationGroup[] = [
  NotificationGroup.TODAY,
  NotificationGroup.YESTERDAY,
  NotificationGroup.EARLIER,
];

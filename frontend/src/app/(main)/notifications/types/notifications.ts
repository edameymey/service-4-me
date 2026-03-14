export enum NotificationGroup {
  TODAY = 'today',
  YESTERDAY = 'yesterday',
  EARLIER = 'earlier',
}

export enum NotificationItem {
  TRADE = 'trade',
  MESSAGES = 'messages',
  SYSTEM = 'system',
}

export type NotificationEntry = {
  id: string;
  tab: NotificationItem;
  group: NotificationGroup;
  title: string;
  subtitle: string;
  avatarLabel: string;
  avatarColor: string;
  unread: boolean;
};

export type Conversation = {
  id: string;
  name: string;
  preview: string;
  timeLabel: string;
  initials: string;
  activeNow?: boolean;
};

export enum MessageSender {
  Me = 'me',
  Them = 'them',
}

export type Message = {
  id: string;
  sender: MessageSender;
  text: string;
  time: string;
};

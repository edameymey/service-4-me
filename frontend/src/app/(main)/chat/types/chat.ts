export type Conversation = {
  id: string;
  name: string;
  preview: string;
  timeLabel: string;
  initials: string;
  activeNow?: boolean;
};

export type Message = {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
};

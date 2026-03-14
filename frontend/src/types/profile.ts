export type Skill = {
  id: string;
  level: 'EXPERT' | 'ADVANCED';
  title: string;
  description: string;
};

export type Trade = {
  id: string;
  status: 'OPEN' | 'IN PROGRESS';
  title: string;
  details: string;
};

export type Review = {
  id: string;
  author: string;
  initials: string;
  rating: number;
  timeAgo: string;
  text: string;
  service: string;
};

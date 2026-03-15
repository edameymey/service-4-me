export enum MenuIconKey {
  OVERVIEW = 'overview',
  AVAILABILITY = 'availability',
  REVIEWS = 'reviews',
  BADGES = 'badges',
  MESSAGE = 'message',
}

export enum FeatureIconKey {
  DURATION = 'duration',
  LANGUAGES = 'languages',
}

export type SidebarMenuItem = {
  id: string;
  label: string;
  icon: MenuIconKey;
};

export type ServiceTutor = {
  id: string;
  name: string;
  shortName: string;
  rating: number;
  lookingFor: string;
  serviceAreaText: string;
};

export type ServiceFeature = {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconKey;
};

export type ServiceDetail = {
  id: string;
  category: string;
  format: string;
  title: string;
  description: string;
  tutor: ServiceTutor;
  features: ServiceFeature[];
};

export type AvailabilitySlot = {
  id: string;
  day: string;
  hasSlots: boolean;
  timeRange: string;
};

export type ReviewSummary = {
  count: number;
  author: string;
  tradedFor: string;
  quote: string;
};

export type ServiceSidebarProps = {
  service: ServiceDetail;
  menuItems: SidebarMenuItem[];
  selectedMenuId: string;
  onSelectMenu: (menuId: string) => void;
  onMessageTutor: () => void;
};

export type ServiceDetailsCardProps = {
  service: ServiceDetail;
  availabilitySlots: AvailabilitySlot[];
  selectedAvailabilityId: string;
  onSelectAvailability: (slotId: string, hasSlots: boolean) => void;
  onProposeTrade: () => void;
  onSaveForLater: () => void;
};

export type ServiceBottomCardsProps = {
  requirements: string[];
  reviewSummary: ReviewSummary;
  onViewAllReviews: () => void;
};

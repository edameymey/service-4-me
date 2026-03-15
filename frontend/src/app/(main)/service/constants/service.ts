import {
  AvailabilitySlot,
  FeatureIconKey,
  MenuIconKey,
  ReviewSummary,
  ServiceDetail,
  SidebarMenuItem,
} from '../types/service';

export const MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'overview', label: 'Overview', icon: MenuIconKey.OVERVIEW },
  { id: 'availability', label: 'Availability', icon: MenuIconKey.AVAILABILITY },
  { id: 'reviews', label: 'Reviews (24)', icon: MenuIconKey.REVIEWS },
];

export const SERVICE_DETAILS: ServiceDetail = {
  id: 'math-tutoring-2h',
  category: 'Education',
  format: 'Remote or In-person',
  title: 'Math Tutoring (2 Hours)',
  description:
    'Personalized tutoring for Algebra, Calculus, or SAT preparation. I have 3 years of experience helping students improve their scores and confidence. I\'ll provide practice problems and clear explanations.',
  tutor: {
    id: 'alex-rivera',
    name: 'Alex Rivera',
    shortName: 'Alex R.',
    rating: 5,
    lookingFor: 'Dog Walking or Grocery Help',
    serviceAreaText: 'Alex usually trades within 5 miles of Downtown.',
  },
  features: [
    {
      id: 'duration',
      title: '2 Hours Duration',
      description: 'Fixed time trade unit',
      icon: FeatureIconKey.DURATION,
    },
    {
      id: 'languages',
      title: 'Languages',
      description: 'English, Spanish',
      icon: FeatureIconKey.LANGUAGES,
    },
  ],
};

export const AVAILABILITY_SLOTS: AvailabilitySlot[] = [
  {
    id: 'monday',
    day: 'Mondays',
    hasSlots: true,
    timeRange: '8:00 AM - 10:00 AM',
  },
  { id: 'tuesday', day: 'Tuesdays', hasSlots: false, timeRange: 'No Slots' },
  {
    id: 'wednesday',
    day: 'Wednesdays',
    hasSlots: true,
    timeRange: '8:00 AM - 10:00 AM',
  },
  { id: 'thursday', day: 'Thursdays', hasSlots: false, timeRange: 'No Slots' },
];

export const WHAT_YOU_NEED_ITEMS: string[] = [
  'Internet connection (for remote)',
  'Course materials or textbook',
  'Specific topics you want to cover',
];

export const REVIEW_SUMMARY: ReviewSummary = {
  count: 24,
  author: 'Sarah M.',
  tradedFor: 'Traded: Dog Walking',
  quote: '"Alex is a patient teacher! My son finally understands fractions."',
};

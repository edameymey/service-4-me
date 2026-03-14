import { PrivacyOptions } from '../types/settings';

export const ACCOUNT_ITEMS = [
  {
    id: 'email',
    label: 'Email Address',
    value: 'alex.smith@example.com',
    icon: 'mail',
  },
  {
    id: 'password',
    label: 'Password',
    value: 'Last changed 45 days ago',
    icon: 'lock',
  },
  {
    id: 'phone',
    label: 'Phone Number',
    value: '+1 (555) 982-0123',
    icon: 'phone',
  },
] as const;

export const PRIVACY_OPTIONS = [
  {
    id: PrivacyOptions.PUBLIC,
    label: 'Public (Everyone)',
    description: 'Visible to all users across the platform.',
  },
  {
    id: PrivacyOptions.MEMBERS,
    label: 'Community Members Only',
    description: 'Only signed-in members can find your skills.',
  },
] as const satisfies ReadonlyArray<{
  id: PrivacyOptions;
  label: string;
  description: string;
}>;

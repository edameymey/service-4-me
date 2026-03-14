import { LockIcon } from '../svgs/LockIcon';
import { MailIcon } from '../svgs/MailIcon';
import { PhoneIcon } from '../svgs/PhoneIcon';

type AccountItemIconProps = {
  icon: 'mail' | 'lock' | 'phone';
};

export const AccountItemIcon = ({ icon }: AccountItemIconProps) => {
  if (icon === 'mail') {
    return <MailIcon />;
  }

  if (icon === 'lock') {
    return <LockIcon />;
  }

  return <PhoneIcon />;
};

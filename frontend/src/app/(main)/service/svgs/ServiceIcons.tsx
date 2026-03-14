import { FeatureIconKey, MenuIconKey } from '../types/service';

export const ProfileAvatarIcon = () => (
  <div className="grid h-12 w-12 place-items-center rounded-full bg-[#e8be8f] text-sm font-bold text-white">
    AR
  </div>
);

export const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 2l2.5 5.2L20 8l-4 3.8 1 5.6-5-2.7-5 2.7 1-5.6L4 8l5.5-.8L12 2z" />
  </svg>
);

export const MenuItemIcon = ({ icon }: { icon: MenuIconKey }) => {
  if (icon === 'overview') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" />
      </svg>
    );
  }

  if (icon === 'availability') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    );
  }

  if (icon === 'reviews') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M4 4h16v12H7l-3 3V4z" />
      </svg>
    );
  }

  if (icon === 'badges') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2l7 3v6c0 5-3.3 9.6-7 11-3.7-1.4-7-6-7-11V5l7-3z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4 6h16v10H7l-3 3V6z" />
    </svg>
  );
};

export const FeatureIcon = ({ icon }: { icon: FeatureIconKey }) => {
  if (icon === FeatureIconKey.DURATION) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 3h10M8 3v4l2 4-2 4v6m6-14l-2 4 2 4v6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18" />
    </svg>
  );
};

export const AvailabilityIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5l4 2-.8 1.8L11 13V7h2z" />
  </svg>
);

export const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M7 3h10l4 5-9 13L3 8l4-5zm1.7 2L6 8h4L8.7 5zm6.6 0L14 8h4l-1.3-3z" />
  </svg>
);

export const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.2 7.8l-5 5.1-2.4-2.4L7.4 14l3.8 3.8 6.4-6.5-1.4-1.5z" />
  </svg>
);

export const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

type IconProps = {
  className?: string;
};

type StarIconProps = {
  className?: string;
  filled?: boolean;
};

export const StarIcon = ({ className, filled = false }: StarIconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3z" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M8.5 12.3l2.2 2.2 4.8-4.8" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 2a6 6 0 00-6 6c0 3.8 3.1 7.4 5.1 9.4a1.3 1.3 0 001.8 0C14.9 15.4 18 11.8 18 8a6 6 0 00-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

export const WrenchIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20 7.5a4.5 4.5 0 01-6 4.2L7 18.7a2 2 0 11-2.8-2.8l7-7a4.5 4.5 0 114.2-6l-2.1 2.1 2.6 2.6L20 7.5z" />
  </svg>
);

export const HeartIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 21s-7-4.7-9.3-8.1A5.6 5.6 0 0112 5.7a5.6 5.6 0 019.3 7.2C19 16.3 12 21 12 21z" />
  </svg>
);

export const SparkleIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" />
    <path d="M18.5 14l.8 1.8 1.7.7-1.7.7-.8 1.8-.8-1.8-1.7-.7 1.7-.7.8-1.8z" />
    <path d="M5.5 13l.8 1.8 1.7.7-1.7.7-.8 1.8-.8-1.8-1.7-.7 1.7-.7.8-1.8z" />
  </svg>
);

export const HistoryIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 12a9 9 0 109-9 9.5 9.5 0 00-6.8 2.8" />
    <path d="M3 4v5h5" />
    <path d="M12 7v5l3 2" />
  </svg>
);

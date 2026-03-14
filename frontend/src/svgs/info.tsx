import { steps, values } from '@/constants/info';

export const StepIcon = ({
  icon,
}: {
  icon: (typeof steps)[number]['icon'];
}) => {
  if (icon === 'spark') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 8h6M7 12h4M14 6l5 5-5 5" />
      </svg>
    );
  }

  if (icon === 'clock') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 7h10l-1 11H8L7 7z" />
      <path d="M9 7a3 3 0 016 0" />
      <path d="M10 12h4" />
    </svg>
  );
};

export const ValueIcon = ({
  icon,
}: {
  icon: (typeof values)[number]['icon'];
}) => {
  if (icon === 'users') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M8 12a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM3 20a5 5 0 0110 0H3zm8 0a5 5 0 0110 0h-10z" />
      </svg>
    );
  }

  if (icon === 'bars') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M5 20V9h3v11H5zm5 0V4h3v16h-3zm5 0v-7h3v7h-3z" />
      </svg>
    );
  }

  if (icon === 'badge') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2l2.3 2.5 3.4-.4.8 3.3 3.1 1.6-1.6 3.1 1.6 3.1-3.1 1.6-.8 3.3-3.4-.4L12 22l-2.3-2.5-3.4.4-.8-3.3-3.1-1.6 1.6-3.1-1.6-3.1 3.1-1.6.8-3.3 3.4.4L12 2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M7 7h10v10H7z" />
      <circle cx="9" cy="9" r="1.2" fill="#f8faf7" />
      <path d="M4 8h3v8H4zM17 10h3v6h-3z" />
    </svg>
  );
};

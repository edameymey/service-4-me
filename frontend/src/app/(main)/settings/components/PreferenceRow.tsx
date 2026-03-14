type PreferenceRowProps = {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  hasBorder?: boolean;
};

export const PreferenceRow = ({
  title,
  description,
  enabled,
  onToggle,
  hasBorder = true,
}: PreferenceRowProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 px-4 py-4 sm:px-5 ${
        hasBorder ? 'border-b border-[#edf1f4]' : ''
      }`}
    >
      <div>
        <p className="text-sm font-semibold text-[#253042]">{title}</p>
        <p className="text-xs text-[#8f9baa]">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition ${
          enabled ? 'bg-[#88ab7d]' : 'bg-[#d6dce2]'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

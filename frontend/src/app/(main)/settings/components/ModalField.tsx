type ModalFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: 'text' | 'password';
  error?: string;
};

export const ModalField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}: ModalFieldProps) => {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-[#253042]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-white px-3 py-2.5 text-sm text-[#253042] outline-none transition placeholder:text-[#a1acb7] focus:border-[#97b88d] focus:ring-2 focus:ring-[#dcead4] ${
          error ? 'border-[#e29a9a]' : 'border-[#dfe5eb]'
        }`}
      />
      {error ? (
        <span className="mt-1 block text-xs text-[#d14343]">{error}</span>
      ) : null}
    </label>
  );
};

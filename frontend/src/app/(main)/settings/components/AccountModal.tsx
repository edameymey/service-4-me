import type { ReactNode } from 'react';
import { CloseIcon } from '../svgs/CloseIcon';

type AccountModalProps = {
  title: string;
  children: ReactNode;
  submitLabel: string;
  onClose: () => void;
  onSubmit: () => void;
};

export const AccountModal = ({
  title,
  children,
  submitLabel,
  onClose,
  onSubmit,
}: AccountModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#253042]/35 px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#dfe3e8] bg-white p-5 shadow-[0_20px_45px_rgba(37,48,66,0.22)] sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[#253042]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid h-8 w-8 place-items-center rounded-full bg-[#f2f5f8] text-[#7f8b99] transition hover:bg-[#e8edf2]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-3">{children}</div>

        <div className="mt-5 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#dfe5eb] bg-white px-4 py-2 text-sm font-semibold text-[#667382] transition hover:bg-[#f7f9fb]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-full bg-[#709b68] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#63885c]"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

type DeactivateAccountSectionProps = {
  onDeactivate: () => void;
};

export const DeactivateAccountSection = ({
  onDeactivate,
}: DeactivateAccountSectionProps) => {
  return (
    <div className="rounded-[24px] border border-[#f2cccc] bg-[#fff5f4] p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-bold text-[#d14343]">
            Deactivate Account
          </h2>
          <p className="mt-1 text-xs text-[#e07a7a]">
            This action is permanent and cannot be undone.
          </p>
        </div>

        <button
          type="button"
          onClick={onDeactivate}
          className="inline-flex items-center justify-center rounded-full border border-[#f0b8b8] bg-white px-5 py-2 text-sm font-semibold text-[#d14343] transition hover:bg-[#fff0f0]"
        >
          Close Account
        </button>
      </div>
    </div>
  );
};

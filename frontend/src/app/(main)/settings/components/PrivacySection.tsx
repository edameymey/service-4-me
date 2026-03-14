import { PRIVACY_OPTIONS } from '../constants/settings';
import { PrivacyOptions } from '../types/settings';
import { SettingsSection } from './SettingsSection';

type PrivacySectionProps = {
  privacyOption: PrivacyOptions;
  onPrivacyChange: (option: PrivacyOptions) => void;
};

export const PrivacySection = ({
  privacyOption,
  onPrivacyChange,
}: PrivacySectionProps) => {
  return (
    <SettingsSection title="Privacy">
      <div className="rounded-[24px] border border-[#e3e8ee] bg-white p-4 sm:p-5">
        <div>
          <h2 className="text-base font-bold text-[#253042]">
            Who can see my skills?
          </h2>
          <p className="mt-1 text-sm text-[#8f9baa]">
            Choose who can find you in the skill search.
          </p>
        </div>

        <div className="mt-4 space-y-2.5">
          {PRIVACY_OPTIONS.map((option) => {
            const isSelected = privacyOption === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onPrivacyChange(option.id)}
                className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                  isSelected
                    ? 'border-[#aac69d] bg-[#f8fbf5]'
                    : 'border-[#ecf0f3] bg-white hover:bg-[#fafcf9]'
                }`}
              >
                <span
                  className={`mt-1 flex h-4 w-4 items-center justify-center rounded-full border ${
                    isSelected
                      ? 'border-[#6d9b66] text-[#6d9b66]'
                      : 'border-[#b8c3cf] text-transparent'
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#253042]">
                    {option.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-[#8f9baa]">
                    {option.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </SettingsSection>
  );
};

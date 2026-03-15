import { ServiceDetailsCardProps } from '../types/service';
import {
  AvailabilityIcon,
  DiamondIcon,
  FeatureIcon,
} from '../svgs/ServiceIcons';

export const ServiceDetailsCard = ({
  service,
  availabilitySlots,
  selectedAvailabilityId,
  onSelectAvailability,
  onProposeTrade,
  onSaveForLater,
}: ServiceDetailsCardProps) => {
  return (
    <section className="rounded-2xl border border-[#dfe3e8] bg-white p-5 shadow-[0_6px_20px_rgba(34,51,84,0.04)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#edf4e7] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#85a776]">
          {service.category}
        </span>
        <span className="rounded-full bg-[#f2f4f7] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#8d98a5]">
          {service.format}
        </span>
      </div>

      <h1 className="mt-3 text-xl font-black tracking-tight text-[#1f2d40]">
        {service.title}
      </h1>
      <p className="mt-2 max-w-4xl text-sm leading-6 text-[#6f7f90]">
        {service.description}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {service.features.map((feature) => (
          <article
            key={feature.id}
            className="flex items-center gap-3 rounded-xl border border-[#e8edf2] bg-[#fbfcfd] px-3 py-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#eef5e9] text-[#86a777]">
              <FeatureIcon icon={feature.icon} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#2c3a4d]">
                {feature.title}
              </p>
              <p className="text-xs text-[#8290a0]">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="flex items-center gap-2 text-base font-bold tracking-tight text-[#253042]">
          <span className="text-[#89ad79]">
            <AvailabilityIcon />
          </span>
          Availability
        </h2>

        <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
          {availabilitySlots.map((slot) => {
            const isSelected = selectedAvailabilityId === slot.id;

            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => onSelectAvailability(slot.id, slot.hasSlots)}
                className={`rounded-xl border px-3 py-2 text-center transition ${
                  slot.hasSlots
                    ? isSelected
                      ? 'border-[#95ba84] bg-[#f6fbf3]'
                      : 'border-[#dfe7dc] bg-white hover:bg-[#f8fcf6]'
                    : 'border-[#e8edf2] bg-[#fafbfd] text-[#a1acb7]'
                }`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#8ea084]">
                  {slot.day}
                </p>
                <p
                  className={`mt-1 text-sm font-bold ${slot.hasSlots ? 'text-[#2f3e50]' : 'text-[#a9b4bf]'}`}
                >
                  {slot.timeRange}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={onProposeTrade}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#8bb16f] px-4 py-3 text-base font-bold text-white transition hover:bg-[#789c61]"
        >
          <DiamondIcon />
          Propose a Trade
        </button>
        <button
          type="button"
          onClick={onSaveForLater}
          className="rounded-xl bg-[#eef2f6] px-5 py-3 text-base font-bold text-[#4f5f70] transition hover:bg-[#e4eaf0]"
        >
          Save for Later
        </button>
      </div>
    </section>
  );
};

import { ServiceBottomCardsProps } from '../types/service';
import { CheckCircleIcon, ProfileAvatarIcon } from '../svgs/ServiceIcons';

export const ServiceBottomCards = ({
  requirements,
  reviewSummary,
  onViewAllReviews,
}: ServiceBottomCardsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <section className="flex flex-col justify-center rounded-2xl border border-[#dfe3e8] bg-white p-5 shadow-[0_6px_20px_rgba(34,51,84,0.04)]">
        <h3 className="text-base font-bold tracking-tight text-[#253042]">
          What you'll need
        </h3>
        <ul className="mt-3 space-y-2">
          {requirements.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-[#5f6d7d]"
            >
              <span className="text-[#89ad79]">
                <CheckCircleIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-[#dfe3e8] bg-white p-5 shadow-[0_6px_20px_rgba(34,51,84,0.04)]">
        <h3 className="text-base font-bold tracking-tight text-[#253042]">
          Reviews
        </h3>
        <div className="mt-3 flex items-start gap-3">
          <ProfileAvatarIcon />
          <div>
            <p className="text-sm font-bold text-[#253042]">
              {reviewSummary.author}
            </p>
            <p className="text-sm text-[#7f8f9f]">{reviewSummary.tradedFor}</p>
            <p className="mt-1 text-sm italic text-[#4f5f70]">
              {reviewSummary.quote}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onViewAllReviews}
          className="mt-4 text-sm font-bold text-[#7fa56d] transition hover:text-[#6f9160]"
        >
          View all {reviewSummary.count} reviews
        </button>
      </section>
    </div>
  );
};

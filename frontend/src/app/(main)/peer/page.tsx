'use client';

const peer = {
  name: 'David Miller',
  role: 'Expert Handyman',
  location: 'London, UK',
  rating: 4.9,
  reviewCount: 124,
  responderLabel: 'Fast Responder',
};

const stats = [
  { id: 'swaps', label: 'Total Swaps', value: '142' },
  { id: 'monthly-swaps', label: "This Month's Swaps", value: '18' },
] as const;

const skills = [
  'Car Repair',
  'Plumbing',
  'Carpentry',
  'Electrical',
  'Home Painting',
] as const;

const wishlist = [
  {
    id: 'english',
    title: 'English Lessons',
    note: 'Conversational practice needed',
  },
  {
    id: 'web',
    title: 'Web Development',
    note: 'Basic HTML/CSS intro',
  },
] as const;

const history = [
  {
    id: 'sarah',
    name: 'Sarah J.',
    initials: 'SJ',
    stars: 5,
    timeAgo: '2 weeks ago',
    text: 'David fixed my leaking kitchen sink in exchange for a few Spanish lessons. He was incredibly professional, efficient, and explained everything he was doing. Highly recommended for any household repairs!',
    tag: 'Exchange: Plumbing + Language',
  },
  {
    id: 'mike',
    name: 'Mike R.',
    initials: 'MR',
    stars: 4,
    timeAgo: '1 month ago',
    text: 'Helped me with some electrical wiring in my home office. Very knowledgeable and safe. Great swap!',
    tag: 'Exchange: Electrical + Garden Design',
  },
] as const;

const PeerPage = () => {
  const logAction = (action: string, payload?: string) => {
    console.log('[peer-page-action]', { action, payload });
  };

  return (
    <section className="min-h-screen w-full rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-4 py-6 sm:px-8 sm:py-8">
      <div className="flex w-full flex-col gap-5">
        <article className="rounded-3xl border border-[#dfe3e8] bg-white p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <div className="relative h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-[#d0d8e2] to-[#8a9eb2]">
                <div className="absolute inset-0 grid place-items-center text-lg font-semibold text-white">
                  DM
                </div>
                <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-[#27c46a]" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-extrabold tracking-tight text-[#1a2238]">
                    {peer.name}
                  </h1>
                </div>

                <p className="mt-1 text-base font-medium text-[#6f7d8a]">
                  {peer.role} • {peer.location}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#fff3de] px-3 py-1 text-xs font-semibold text-[#c47b00]">
                    <StarIcon className="h-3.5 w-3.5" filled />
                    {peer.rating} ({peer.reviewCount} reviews)
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#eef2f7] px-3 py-1 text-xs font-semibold text-[#4f5d6b]">
                    <CheckIcon className="h-3.5 w-3.5" />
                    {peer.responderLabel}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => logAction('request-swap')}
                    className="rounded-full bg-[#5f955d] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#4f7f4d]"
                  >
                    Request a Swap
                  </button>
                  <button
                    type="button"
                    onClick={() => logAction('message-peer')}
                    className="rounded-full bg-[#eef2f6] px-5 py-2 text-sm font-bold text-[#4e5d6e] transition hover:bg-[#e4ebf2]"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[#dfe3e8] bg-white px-4 py-5 text-center"
            >
              <p className="text-xs font-semibold text-[#8a97a4]">
                {item.label}
              </p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight text-[#1c2640]">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#dfe3e8] bg-white p-5">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[#1c2640]">
              <PinIcon className="h-5 w-5 text-[#5f955d]" />
              David&apos;s Skills
            </h2>

            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill}>
                  <button
                    type="button"
                    onClick={() => logAction('select-skill', skill)}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#e2e7ee] bg-[#f7f9fb] px-3 py-1.5 text-sm font-medium text-[#44525f] transition hover:bg-[#edf2f7]"
                  >
                    <WrenchIcon className="h-3.5 w-3.5 text-[#6f7f8f]" />
                    {skill}
                  </button>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#dfe3e8] bg-white p-5">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[#1c2640]">
              <HeartIcon className="h-5 w-5 text-[#5f955d]" />
              David&apos;s interests
            </h2>

            <div className="mt-4 space-y-2.5">
              {wishlist.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => logAction('select-wishlist-item', item.id)}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#e2e7ee] bg-[#f7f9fb] p-3 text-left transition hover:bg-[#edf2f7]"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e9efe3] text-[#597f56]">
                    <SparkleIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1f2a44]">
                      {item.title}
                    </p>
                    <p className="text-xs font-medium text-[#81909f]">
                      {item.note}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-[#dfe3e8] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-[#1c2640]">
              <HistoryIcon className="h-5 w-5 text-[#5f955d]" />
              Past Exchange History
            </h2>
            <button
              type="button"
              onClick={() => logAction('view-all-history')}
              className="text-sm font-bold text-[#5f955d] transition hover:text-[#4c7a4b]"
            >
              View All
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {history.map((entry) => (
              <article
                key={entry.id}
                className="rounded-2xl border border-[#dfe3e8] bg-[#fbfcfd] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f2d7bf] to-[#d5b193] text-xs font-bold text-[#3a2d24]">
                      {entry.initials}
                    </div>
                    <div>
                      <p className="text-base font-extrabold text-[#1f2a44]">
                        {entry.name}
                      </p>
                      <p className="mt-1 flex items-center gap-0.5 text-[#f5a623]">
                        {Array.from({ length: entry.stars }).map((_, index) => (
                          <StarIcon
                            key={`${entry.id}-star-${index}`}
                            className="h-3.5 w-3.5"
                            filled
                          />
                        ))}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#9ba8b5]">
                    {entry.timeAgo}
                  </p>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#5e6c79]">
                  &quot;{entry.text}&quot;
                </p>

                <p className="mt-3 inline-block rounded-md bg-[#eef2f7] px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-[#748394]">
                  {entry.tag}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

const StarIcon = ({
  className,
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) => (
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

const CheckIcon = ({ className }: { className?: string }) => (
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

const PinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 2a6 6 0 00-6 6c0 3.8 3.1 7.4 5.1 9.4a1.3 1.3 0 001.8 0C14.9 15.4 18 11.8 18 8a6 6 0 00-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

const WrenchIcon = ({ className }: { className?: string }) => (
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

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    stroke="none"
  >
    <path d="M12 21s-7-4.7-9.3-8.1A5.6 5.6 0 0112 5.7a5.6 5.6 0 019.3 7.2C19 16.3 12 21 12 21z" />
  </svg>
);

const SparkleIcon = ({ className }: { className?: string }) => (
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

const HistoryIcon = ({ className }: { className?: string }) => (
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

export default PeerPage;

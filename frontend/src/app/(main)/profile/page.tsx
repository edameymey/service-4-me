'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type Skill = {
  id: string;
  level: 'EXPERT' | 'ADVANCED';
  title: string;
  description: string;
};

type Trade = {
  id: string;
  status: 'OPEN' | 'IN PROGRESS';
  title: string;
  details: string;
};

type Review = {
  id: string;
  author: string;
  initials: string;
  rating: number;
  timeAgo: string;
  text: string;
  service: string;
};

const navItems = [
  { id: 'profile', label: 'Profile', icon: 'user', active: true },
  { id: 'messages', label: 'Messages', icon: 'message', active: false },
] as const;

const topNavPrimaryItems = [
  'How it Works',
  'Browse Swaps',
  'Community',
] as const;
const topNavExtraItems = ['Messages', 'My Exchanges'] as const;

const lookingFor = ['Car Repair', 'Photography', 'Home Painting'] as const;

const skills: Skill[] = [
  {
    id: 'english-tutor',
    level: 'EXPERT',
    title: 'English Tutor',
    description:
      'Native speaker with TEFL certification. Specializing in conversational English, business writing, and grammar for all levels.',
  },
  {
    id: 'math-expert',
    level: 'ADVANCED',
    title: 'Math Expert',
    description:
      'Tutoring services for Algebra, Calculus, and Statistics. I can help students prepare for standardized tests like SAT or GRE.',
  },
];

const trades: Trade[] = [
  {
    id: 'trade-1',
    status: 'OPEN',
    title: '2h ESL Session for Home Painting Advice',
    details:
      'Looking to exchange two hours of conversational English coaching for guidance on choosing colors and materials for a small room repaint.',
  },
  {
    id: 'trade-2',
    status: 'IN PROGRESS',
    title: 'SAT Math Prep for Car Maintenance Basics',
    details:
      'Currently exchanging SAT math prep support in return for a practical walkthrough of essential car maintenance checks.',
  },
];

const reviews: Review[] = [
  {
    id: 'sarah',
    author: 'Sarah Miller',
    initials: 'SM',
    rating: 5,
    timeAgo: '2 weeks ago',
    text: 'Alex helped me with my business presentation. His English skills are top-notch and he is very patient. Traded for 2 hours of garden landscaping. Highly recommend!',
    service: 'English Tutoring',
  },
  {
    id: 'david',
    author: 'David Chen',
    initials: 'DC',
    rating: 5,
    timeAgo: '1 month ago',
    text: "Clear and concise math tutoring for my son's finals. Great communicator and very professional. Traded for a professional photoshoot.",
    service: 'Math Expert',
  },
];

const profile = {
  name: 'Alex Johnson',
  memberSince: 'Member since January 2022',
  rating: 4.9,
  exchanges: 48,
  bio: "Dedicated educator with a passion for knowledge exchange. I've spent 10 years teaching mathematics and ESL. Looking to swap my academic skills for practical home maintenance and creative services.",
};

const ProfilePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isExpandedSearchActive, setIsExpandedSearchActive] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpandedSearchActive) {
      searchInputRef.current?.focus();
    }
  }, [isExpandedSearchActive]);

  const logAction = (action: string, payload?: string) => {
    console.log('[profile-action]', { action, payload });
  };

  return (
    <main className="min-h-screen w-full bg-[#f2f4f7] text-[#161c24]">
      <div className="flex min-h-screen w-full flex-col">
        <header className="flex flex-col gap-3 rounded-t-xl border border-[#dfe3e8] bg-white px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo/logo_it.png"
                alt="Service4Me logo"
                width={28}
                height={28}
                className="h-7 w-7 rounded-full object-cover"
                priority
              />
              <span className="text-2xl font-bold tracking-tight text-[#253042]">
                Service4Me
              </span>
            </div>

            <div className="hidden md:block">
              <nav className="flex flex-nowrap items-center gap-8">
                {topNavPrimaryItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => logAction('top-nav-click', item)}
                    className="whitespace-nowrap text-sm font-semibold text-[#253042] transition hover:text-[#5f955d]"
                  >
                    {item}
                  </button>
                ))}

                <div
                  className={`overflow-hidden [will-change:max-width,opacity,transform] transition-[max-width,opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isFeaturesExpanded
                      ? 'max-w-[420px] translate-x-0 opacity-100'
                      : 'max-w-0 -translate-x-2 opacity-0'
                  }`}
                >
                  <div className="flex flex-nowrap items-center gap-8">
                    {topNavExtraItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => logAction('top-nav-extra-click', item)}
                        className={`whitespace-nowrap text-sm font-semibold text-[#253042] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#5f955d] ${
                          isFeaturesExpanded
                            ? 'pointer-events-auto translate-x-0 opacity-100'
                            : 'pointer-events-none translate-x-1 opacity-0'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const nextExpanded = !isFeaturesExpanded;
                    setIsFeaturesExpanded(nextExpanded);
                    setIsExpandedSearchActive(false);
                    logAction(
                      'toggle-features-expand',
                      nextExpanded ? 'expanded' : 'collapsed',
                    );
                  }}
                  aria-label={
                    isFeaturesExpanded
                      ? 'Collapse features'
                      : 'Show more features'
                  }
                  className="px-1 text-xl font-bold leading-none text-[#6f9662] transition hover:text-[#4f7d48]"
                >
                  <span className="inline-block">
                    {isFeaturesExpanded ? '<' : '>'}
                  </span>
                </button>
              </nav>
            </div>
          </div>

          <div className="flex w-full items-center gap-3 md:w-auto">
            <div
              className={`relative h-11 flex-1 overflow-hidden [will-change:width] md:flex-none md:transition-[width] md:duration-700 md:ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isFeaturesExpanded
                  ? isExpandedSearchActive
                    ? 'md:w-[220px]'
                    : 'md:w-11'
                  : 'md:w-[320px]'
              }`}
            >
              <form
                className={`absolute inset-0 transform-gpu transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isFeaturesExpanded && !isExpandedSearchActive
                    ? 'pointer-events-none translate-x-2 scale-[0.97] opacity-0 blur-[1px] delay-0'
                    : 'pointer-events-auto translate-x-0 scale-100 opacity-100 blur-0 delay-100'
                }`}
                onSubmit={(event) => {
                  event.preventDefault();
                  logAction('search-skills-submit', searchValue.trim());
                }}
              >
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  ref={searchInputRef}
                  value={searchValue}
                  onChange={(event) => {
                    setSearchValue(event.target.value);
                    logAction('search-skills-change', event.target.value);
                  }}
                  onBlur={() => {
                    if (isFeaturesExpanded) {
                      setIsExpandedSearchActive(false);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape' && isFeaturesExpanded) {
                      setIsExpandedSearchActive(false);
                    }
                  }}
                  type="text"
                  placeholder="Search skills..."
                  className="h-11 w-full rounded-xl border border-[#e3e8de] bg-[#f3f6ee] pl-10 pr-3 text-sm font-medium text-[#253042] outline-none transition placeholder:text-[#93a08f] focus:border-[#8fb57c]"
                />
              </form>

              <button
                type="button"
                onClick={() => {
                  setIsExpandedSearchActive(true);
                  logAction('search-icon-click');
                }}
                aria-label="Search skills"
                className={`absolute inset-0 grid transform-gpu place-items-center rounded-xl border border-[#e3e8de] bg-[#f3f6ee] text-[#70806f] transition-[opacity,transform,filter,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#ecf1e7] ${
                  isFeaturesExpanded && !isExpandedSearchActive
                    ? 'pointer-events-auto translate-x-0 scale-100 opacity-100 blur-0 delay-120'
                    : 'pointer-events-none -translate-x-2 scale-[0.97] opacity-0 blur-[1px] delay-0'
                }`}
              >
                <SearchIcon />
              </button>
            </div>

            <button
              type="button"
              onClick={() => logAction('login-click')}
              className="rounded-xl bg-[#eef3e7] px-4 py-2.5 text-sm font-bold text-[#6f9662] transition hover:bg-[#e5eddd]"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => logAction('sign-up-click')}
              className="whitespace-nowrap rounded-xl bg-[#79a962] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#6a9955]"
            >
              Sign Up
            </button>
          </div>
        </header>

        <section className="rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-4 py-5 sm:px-8 sm:py-7">
          <div className="rounded-3xl border border-[#dfe3e8] bg-white p-5 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-[#d0d8e2] to-[#8a9eb2]">
                  <div className="absolute inset-0 grid place-items-center text-lg font-semibold text-white">
                    AJ
                  </div>
                  <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white bg-[#27c46a]" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight">
                    {profile.name}
                  </h1>
                  <p className="mt-0.5 text-sm text-[#919eab]">
                    {profile.memberSince}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#f5a623]">
                    {'★'.repeat(Math.round(profile.rating))}
                    <span className="ml-2 text-[#f5a623]">
                      {profile.rating}
                    </span>
                    <span className="ml-1 font-medium text-[#919eab]">
                      ({profile.exchanges} exchanges)
                    </span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => logAction('edit-profile')}
                className="inline-flex items-center gap-2 self-start rounded-full bg-[#5f955d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#548451]"
              >
                <PencilIcon />
                Edit Profile
              </button>
            </div>

            <p className="mt-4 max-w-4xl text-sm leading-6 text-[#637381]">
              {profile.bio}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
            <aside className="space-y-4">
              <div className="rounded-3xl border border-[#dfe3e8] bg-white p-3">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() =>
                          logAction('navigate-profile-menu', item.id)
                        }
                        className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
                          item.active
                            ? 'bg-[#edf4e7] text-[#5f955d]'
                            : 'text-[#637381] hover:bg-[#f5f8fa]'
                        }`}
                      >
                        <MenuIcon icon={item.icon} />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-[#dfe3e8] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-base font-semibold">
                    <SearchIcon />I am looking for
                  </h2>
                  <button
                    type="button"
                    onClick={() => logAction('add-looking-for')}
                    aria-label="Add a looking for item"
                    className="grid h-7 w-7 place-items-center rounded-full bg-[#edf4e7] text-lg font-bold leading-none text-[#5f955d] transition hover:bg-[#e2eed8]"
                  >
                    +
                  </button>
                </div>
                <ul className="mt-3 space-y-2">
                  {lookingFor.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => logAction('select-looking-for', item)}
                        className="flex w-full items-center gap-2 rounded-xl border border-[#e7ebf0] bg-[#f7f9fb] px-3 py-2 text-left text-sm font-medium text-[#4c5a67] transition hover:bg-[#eff3f7]"
                      >
                        <ChipIcon />
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-4">
              <section className="rounded-3xl border border-[#dfe3e8] bg-white p-5">
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                  <BadgeIcon />
                  My Skills
                </h2>

                <div className="mt-4 space-y-3">
                  {skills.map((skill) => (
                    <article
                      key={skill.id}
                      className="rounded-2xl border border-[#dfe3e8] bg-[#fbfcfd] p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-[#5f955d] px-2 py-0.5 text-[11px] font-bold text-white">
                          {skill.level}
                        </span>
                        <h3 className="text-lg font-semibold">{skill.title}</h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-[#637381]">
                        {skill.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-[#dfe3e8] bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                    <SwapBoxIcon />
                    My Trades
                  </h2>
                  <button
                    type="button"
                    onClick={() => logAction('view-all-trades')}
                    className="text-sm font-semibold text-[#5f955d] transition hover:text-[#4f7f4d]"
                  >
                    View all
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {trades.map((trade) => (
                    <article
                      key={trade.id}
                      className="rounded-2xl border border-[#dfe3e8] bg-[#fbfcfd] p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-[#253042] px-2 py-0.5 text-[11px] font-bold text-white">
                          {trade.status}
                        </span>
                        <h3 className="text-lg font-semibold">{trade.title}</h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-6 text-[#637381]">
                        {trade.details}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-[#dfe3e8] bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                    <StarBoxIcon />
                    Reviews
                  </h2>
                  <button
                    type="button"
                    onClick={() => logAction('view-all-reviews')}
                    className="text-sm font-semibold text-[#5f955d] transition hover:text-[#4f7f4d]"
                  >
                    View all
                  </button>
                </div>

                <div className="mt-4 space-y-5">
                  {reviews.map((review) => (
                    <article
                      key={review.id}
                      className="border-b border-[#edf1f4] pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#7db3a5] to-[#3b7c8f] text-sm font-bold text-white">
                            {review.initials}
                          </div>
                          <div>
                            <h3 className="text-base font-semibold">
                              {review.author}
                            </h3>
                            <p className="text-sm text-[#f5a623]">
                              {'★'.repeat(review.rating)}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs font-medium text-[#a6b2bf]">
                          {review.timeAgo}
                        </p>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#637381]">
                        &quot;{review.text}&quot;
                      </p>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#5f955d]">
                        Service: {review.service}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

const PencilIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4 11.5-11.5z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-[#7f8b99]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

const ChipIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-[#7f8b99]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="6" y="8" width="12" height="8" rx="2" />
    <path d="M9 8V6M12 8V6M15 8V6M9 18v-2M12 18v-2M15 18v-2" />
  </svg>
);

const BadgeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-[#5f955d]"
    fill="currentColor"
  >
    <path d="M12 2l2.2 2.5 3.3-.5.8 3.2 3 1.5-1.5 3 1.5 3-3 1.5-.8 3.2-3.3-.5L12 22l-2.2-2.5-3.3.5-.8-3.2-3-1.5 1.5-3-1.5-3 3-1.5.8-3.2 3.3.5L12 2zm0 6a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const StarBoxIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-[#5f955d]"
    fill="currentColor"
  >
    <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm8 3l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9L8.4 18l.7-4-2.9-2.8 4-.6L12 7z" />
  </svg>
);

const SwapBoxIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-[#5f955d]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 7h11l-3-3" />
    <path d="M17 17H6l3 3" />
    <rect x="3" y="3" width="18" height="18" rx="3" />
  </svg>
);

const MenuIcon = ({ icon }: { icon: (typeof navItems)[number]['icon'] }) => {
  if (icon === 'user') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20a7 7 0 0114 0" />
      </svg>
    );
  }

  if (icon === 'message') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 5h16v10H7l-3 3V5z" />
      </svg>
    );
  }

  if (icon === 'swap') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 7h11l-3-3" />
        <path d="M17 17H6l3 3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s-7-4.3-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.7-7 10-7 10z" />
    </svg>
  );
};

export default ProfilePage;

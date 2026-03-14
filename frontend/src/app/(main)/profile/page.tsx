'use client';

import Image from 'next/image';

type Skill = {
  id: string;
  level: 'EXPERT' | 'ADVANCED';
  title: string;
  description: string;
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
  { id: 'exchanges', label: 'My Exchanges', icon: 'swap', active: false },
  { id: 'wishlist', label: 'Wishlist', icon: 'heart', active: false },
] as const;

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
  const logAction = (action: string, payload?: string) => {
    console.log('[profile-action]', { action, payload });
  };

  return (
    <main className="min-h-screen bg-[#f2f4f7] text-[#161c24]">
      <div className="mx-auto flex max-w-6xl flex-col">
        <header className="mt-2 flex items-center justify-between rounded-t-xl border border-[#dfe3e8] bg-white px-5 py-3">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/logo_it.png"
              alt="Service4Me logo"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
              priority
            />
            <span className="text-base font-semibold tracking-tight">
              Service4Me
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => logAction('open-notifications')}
              className="grid h-8 w-8 place-items-center rounded-full bg-[#f2f4f7] text-[#637381] transition hover:bg-[#e7ebf0]"
              aria-label="Open notifications"
            >
              <BellIcon />
            </button>
            <button
              type="button"
              onClick={() => logAction('open-settings')}
              className="grid h-8 w-8 place-items-center rounded-full bg-[#f2f4f7] text-[#637381] transition hover:bg-[#e7ebf0]"
              aria-label="Open settings"
            >
              <GearIcon />
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
                <h2 className="flex items-center gap-2 text-base font-semibold">
                  <SearchIcon />I am looking for
                </h2>
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

        <footer className="rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#eef1f4] px-4 py-5 text-center text-xs text-[#8d99a7] sm:px-8">
          © 2024 Service4Me Inc. Exchange value, build community.
        </footer>
      </div>
    </main>
  );
};

const BellIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5" />
    <path d="M10 19a2 2 0 004 0" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 15.5A3.5 3.5 0 1012 8.5a3.5 3.5 0 000 7z" />
    <path d="M19.4 15a1 1 0 00.2 1.1l.1.1a1 1 0 010 1.4l-1.2 1.2a1 1 0 01-1.4 0l-.1-.1a1 1 0 00-1.1-.2 1 1 0 00-.6.9V20a1 1 0 01-1 1h-1.6a1 1 0 01-1-1v-.2a1 1 0 00-.6-.9 1 1 0 00-1.1.2l-.1.1a1 1 0 01-1.4 0L4.3 18a1 1 0 010-1.4l.1-.1a1 1 0 00.2-1.1 1 1 0 00-.9-.6H3.5a1 1 0 01-1-1v-1.6a1 1 0 011-1h.2a1 1 0 00.9-.6 1 1 0 00-.2-1.1l-.1-.1a1 1 0 010-1.4l1.2-1.2a1 1 0 011.4 0l.1.1a1 1 0 001.1.2h.1a1 1 0 00.6-.9V4a1 1 0 011-1h1.6a1 1 0 011 1v.2a1 1 0 00.6.9h.1a1 1 0 001.1-.2l.1-.1a1 1 0 011.4 0l1.2 1.2a1 1 0 010 1.4l-.1.1a1 1 0 00-.2 1.1v.1a1 1 0 00.9.6h.2a1 1 0 011 1v1.6a1 1 0 01-1 1h-.2a1 1 0 00-.9.6V15z" />
  </svg>
);

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

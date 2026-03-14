import ServiceCard from '@/components/ServiceCard';

const MarketplacePage = () => {
  return (
    <section className="bg-[#f2f4f7] px-4 pb-8 pt-7 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-305">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-[2.7rem]">
          Discover Peer Services
        </h1>
        <p className="mt-1.5 text-lg text-[#6b7280]">
          Trade your skills with others in your local community.
        </p>

        <form className="mt-6 flex flex-col gap-2.5 md:flex-row md:items-center" role="search">
          <label htmlFor="marketplace-search" className="sr-only">
            Search for a skill or need
          </label>
          <div className="relative flex-1">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]">
              <SearchIcon />
            </span>
            <input
              id="marketplace-search"
              name="q"
              type="text"
              placeholder="Search for a skill or need (e.g., Coding, Gardening, Piano)"
              className="h-14 w-full rounded-4xl border border-[#dbe1e8] bg-white pl-12 pr-4 text-xl text-[#111827] shadow-[0_1px_2px_rgba(0,0,0,0.04)] outline-none placeholder:text-[#9aa3af] focus:border-[#7ca960]"
            />
          </div>

          <button
            type="submit"
            className="h-14 rounded-4xl bg-[#4c7f41] px-8 text-xl font-semibold text-white shadow-[0_8px_18px_rgba(76,127,65,0.28)] transition-colors hover:bg-[#416f37]"
          >
            Search
          </button>
        </form>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-lg font-semibold transition-colors ${filter.active
                ? 'border-[#4c7f41] bg-[#4c7f41] text-white shadow-[0_6px_14px_rgba(76,127,65,0.2)]'
                : 'border-[#dde3ea] bg-white text-[#1f2937] hover:bg-[#f8fafc]'
                }`}
            >
              <filter.icon active={Boolean(filter.active)} />
              <span>{filter.label}</span>
              {filter.hasChevron && <ChevronDownIcon />}
            </button>
          ))}
        </div>

        <section className="mt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceListings.map((listing) => (
              <ServiceCard key={listing.href} {...listing} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

type IconProps = {
  active?: boolean;
};

const SearchIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

const GridIcon = ({ active = false }: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    className={active ? 'text-white' : 'text-[#111827]'}
  >
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10L12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v4c0 .5.4 1 1 1.3l5 2.2 5-2.2c.6-.3 1-.8 1-1.3v-4" />
  </svg>
);

const WrenchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a4.5 4.5 0 0 1-6.2 6.2L3 18l3 3 5.5-5.5a4.5 4.5 0 0 0 6.2-6.2l-2.2 2.2-2.8-2.8 2-2.4Z" />
  </svg>
);

const PaletteIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a9 9 0 0 0-9 9c0 5 4.1 9 9 9h1.2a2.8 2.8 0 0 0 0-5.6h-1.4a1.8 1.8 0 0 1-1.8-1.8A1.8 1.8 0 0 1 11.8 12H13a8 8 0 0 0 8-8.2A8.1 8.1 0 0 0 12 3Z" />
    <circle cx="7.5" cy="10" r=".8" fill="currentColor" stroke="none" />
    <circle cx="10.3" cy="7.4" r=".8" fill="currentColor" stroke="none" />
    <circle cx="14" cy="7.2" r=".8" fill="currentColor" stroke="none" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <path d="m12 3.7 2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.7-5.3 2.7 1-5.9-4.3-4.2 5.9-.9L12 3.7Z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const filters = [
  { label: 'All Categories', icon: GridIcon, active: true },
  { label: 'Tutoring', icon: GraduationIcon },
  { label: 'Repair', icon: WrenchIcon },
  { label: 'Creative', icon: PaletteIcon },
  { label: 'Distance', icon: PinIcon, hasChevron: true },
  { label: 'Rating', icon: StarIcon, hasChevron: true },
];

const serviceListings = [
  {
    href: '/service/101',
    imageSrc:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    hours: 1,
    category: 'Tutoring',
    title: 'English Conversation Practice',
    description:
      'Friendly one-on-one sessions to improve spoken English confidence and fluency.',
    authorName: 'Elena M.',
    scheduledAt: 'Remote',
  },
  {
    href: '/service/102',
    imageSrc:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    hours: 2,
    category: 'Gardening',
    title: 'Backyard Garden Setup',
    description:
      'Help planning and planting a small vegetable garden for spring season.',
    authorName: 'George T.',
    scheduledAt: 'Cluj-Napoca',
  },
  {
    href: '/service/103',
    imageSrc:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    hours: 2,
    category: 'Tech',
    title: 'Landing Page Feedback',
    description:
      'Get practical UI/UX suggestions and accessibility tips for your website.',
    authorName: 'Radu C.',
    scheduledAt: 'Remote',
  },
  {
    href: '/service/104',
    imageSrc:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
    hours: 1,
    category: 'Repair',
    title: 'Laptop Cleanup & Optimization',
    description:
      'Speed up your laptop by cleaning startup apps and improving system settings.',
    authorName: 'Andrei P.',
    scheduledAt: 'Brașov',
  },
  {
    href: '/service/105',
    imageSrc:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
    hours: 1,
    category: 'Creative',
    title: 'Logo Sketch Session',
    description:
      'Brainstorm and sketch first logo concepts for your side project or idea.',
    authorName: 'Ioana D.',
    scheduledAt: 'Remote',
  },
  {
    href: '/service/106',
    imageSrc:
      'https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=800&q=80',
    hours: 3,
    category: 'Cooking',
    title: 'Meal Prep Basics',
    description:
      'Learn efficient weekly meal prep with easy recipes and grocery planning.',
    authorName: 'Maria S.',
    scheduledAt: 'Timișoara',
  },
  {
    href: '/service/107',
    imageSrc:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    hours: 1,
    category: 'Fitness',
    title: 'Beginner Mobility Routine',
    description:
      'A simple mobility and stretching plan to improve posture and flexibility.',
    authorName: 'Cristina V.',
    scheduledAt: 'Remote',
  },
  {
    href: '/service/108',
    imageSrc:
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
    hours: 2,
    category: 'Music',
    title: 'Piano for Beginners',
    description:
      'Start with chords, rhythm, and simple songs in a relaxed beginner-friendly class.',
    authorName: 'Victor N.',
    scheduledAt: 'Sibiu',
  },
];

export default MarketplacePage;

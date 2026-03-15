import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { PROCESS_STEPS } from './constants/main';

const POPULAR_LISTINGS = [
    {
        href: '/service/1',
        imageSrc: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80',
        hours: 2,
        category: 'Massage',
        title: 'Deep Tissue Massage',
        description: 'Release muscle tension with a restorative full-body massage session.',
        authorName: 'Sarah M.',
        scheduledAt: 'Portland, OR',
    },
    {
        href: '/service/2',
        imageSrc: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
        hours: 1,
        category: 'Tutoring',
        title: 'Spanish Tutoring',
        description: 'Conversation-focused Spanish lessons for beginners and intermediate learners.',
        authorName: 'Javier R.',
        scheduledAt: 'Remote',
    },
    {
        href: '/service/3',
        imageSrc: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
        hours: 1,
        category: 'Gardening',
        title: 'Garden Help Needed',
        description: 'Need help pruning plants and organizing the backyard for spring.',
        authorName: 'Mrs. Gable',
        scheduledAt: 'Seattle, WA',
    },
    {
        href: '/service/4',
        imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
        hours: 3,
        category: 'Tech',
        title: 'Web Design Basics',
        description: 'Learn layout, typography, and responsive design fundamentals in one session.',
        authorName: 'Alex K.',
        scheduledAt: 'Remote',
    },
];


const HomePage = () => {
    return (
        <>
            <section className="bg-[#f2f4f7] px-4 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 lg:pt-50 mb-20">
                <div className="mx-auto grid w-full max-w-305 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div className="max-w-155">
                        <span className="inline-flex rounded-full bg-[#ebf2e6] px-4 py-1 text-xs font-semibold tracking-[0.08em] text-[#7ba259]">
                            COMMUNITY DRIVEN EXCHANGE
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-[#0f1c3a] sm:text-5xl md:text-6xl">
                            Trade your time, get <span className="text-[#85b065]">help</span> in return
                        </h1>

                        <p className="mt-6 max-w-155 text-lg leading-relaxed text-[#637381]">
                            Join a community where skills are the currency. Offer an hour of what
                            you&apos;re good at, and get an hour of help from someone else. No money
                            needed.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/marketplace"
                                className="rounded-2xl bg-[#85b065] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_20px_rgba(133,176,101,0.28)] transition-colors hover:bg-[#749a58]"
                            >
                                Start Swapping
                            </Link>
                            <Link
                                href="/info"
                                className="rounded-2xl border border-[#dfe3e8] bg-white px-8 py-4 text-lg font-semibold text-[#24324a] transition-colors hover:bg-[#f8f9fb]"
                            >
                                How it works
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {['A', 'M', 'R'].map((initial, index) => (
                                    <div
                                        key={initial}
                                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f2f4f7] text-sm font-bold text-white ${index === 0
                                            ? 'bg-[#ff9f5c]'
                                            : index === 1
                                                ? 'bg-[#5ca5ff]'
                                                : 'bg-[#5cbf8d]'
                                            }`}
                                    >
                                        {initial}
                                    </div>
                                ))}
                            </div>
                            <p className="text-base font-medium text-[#8c9bad]">
                                Joined by 10,000+ swappers
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-[28px] border border-[#e4e8ed] bg-white shadow-[0_18px_45px_rgba(22,28,36,0.08)]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/home.jpeg"
                                alt="People collaborating together"
                                className="h-107.5 w-full object-cover object-center"
                            />
                        </div>

                        <div className="absolute -bottom-6 left-4 rounded-3xl border border-[#eef1f5] bg-white px-6 py-4 shadow-[0_16px_30px_rgba(22,28,36,0.12)] sm:left-8">
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ebf2e6] text-xl">
                                    ⏱️
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold leading-none text-[#0f1c3a]">
                                        142,000+
                                    </p>
                                    <p className="mt-1 text-xs font-bold tracking-[0.18em] text-[#8c9bad]">
                                        HOURS EXCHANGED
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#ebf2e6] px-4 pb-16 pt-20 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-305">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-semibold tracking-[0.2em] text-[#85b065]">
                            SIMPLE PROCESS
                        </p>
                        <h2 className="mt-3 text-4xl font-extrabold text-[#0f1c3a] sm:text-5xl">
                            How TimeSwap Works
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#637381]">
                            Exchange services without spending a dime. Our platform ensures every
                            service you offer you get another one in return.
                        </p>
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {PROCESS_STEPS.map((step) => (
                            <article
                                key={step.title}
                                className="rounded-3xl border border-[#e8ecef] bg-white p-9 shadow-[0_10px_30px_rgba(15,28,58,0.04)]"
                            >
                                <div className="mb-7 flex h-18 w-18 items-center justify-center rounded-2xl bg-[#85b065] text-white shadow-[0_10px_16px_rgba(133,176,101,0.28)]">
                                    <step.icon />
                                </div>
                                <h3 className="text-4xl font-bold text-[#1b2540]">{step.title}</h3>
                                <p className="mt-4 text-xl leading-relaxed text-[#637381]">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f2f4f7] px-4 pb-6 pt-16 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-305">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#0f1c3a] sm:text-4xl">
                                Popular Swap Listings
                            </h2>
                            <p className="mt-2 text-base text-[#637381]">
                                Discover what&apos;s happening in your neighborhood
                            </p>
                        </div>
                        <Link
                            href="/marketplace"
                            className="flex items-center gap-1.5 text-sm font-semibold text-[#85b065] hover:text-[#3d5a30]"
                        >
                            View all listings
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {POPULAR_LISTINGS.map((listing) => (
                            <ServiceCard key={listing.href} {...listing} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f2f4f7] px-4 py-12 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-305">
                    <div className="relative overflow-hidden rounded-3xl bg-[#85b065] px-10 py-14 sm:px-16">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -right-10 -top-10 h-full w-3/5 -skew-x-12 bg-white/10" />
                        </div>

                        <div className="relative max-w-xl">
                            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                                Ready to swap your first hour?
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-white/80">
                                Join thousands of people in your city who are already building a more
                                helpful world. Your skills are valuable—put them to use today.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="/profile"
                                    className="rounded-2xl bg-white px-7 py-3.5 text-base font-semibold text-[#3d5a30] transition-colors hover:bg-[#f0f7eb]">
                                    Create Your Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#0f1c3a] px-4 py-14 sm:px-8 lg:px-12">
                <div className="mx-auto grid w-full max-w-305 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl text-white">⏱</span>
                            <span className="text-lg font-bold text-white">TimeSwap</span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-[#8c9bad]">
                            Building stronger communities through the equal exchange of time and skills.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-bold text-white">Platform</h4>
                        <ul className="space-y-2.5">
                            {['How it Works', 'Browse Categories', 'Search Listings', 'Community Guidelines'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-[#8c9bad] transition-colors hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-bold text-white">Support</h4>
                        <ul className="space-y-2.5">
                            {['Help Center', 'Safety Tips', 'Conflict Resolution', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-[#8c9bad] transition-colors hover:text-white">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-bold text-white">Newsletter</h4>
                        <p className="mb-4 text-sm text-[#8c9bad]">Get the latest local swaps in your inbox.</p>
                        <form
                            className="flex overflow-hidden rounded-xl"
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-[#1b2d4f] px-4 py-2.5 text-sm text-white placeholder:text-[#8c9bad] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-[#85b065] px-4 text-white transition-colors hover:bg-[#749a58]"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
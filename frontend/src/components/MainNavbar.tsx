'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import type { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

const topNavPrimaryItems = [
  { label: 'How it Works', href: '/info' },
  { label: 'Browse Swaps', href: '/marketplace' },
  { label: 'Community', href: '/peer' },
] as const;
const topNavExtraItems = [
  { label: 'Messages', href: '/chat' },
  { label: 'My Exchanges', href: '/service' },
] as const;

const MainNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState('');
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isExpandedSearchActive, setIsExpandedSearchActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpandedSearchActive) {
      searchInputRef.current?.focus();
    }
  }, [isExpandedSearchActive]);

  const logAction = (action: string, payload?: string) => {
    console.log('[navbar-action]', { action, payload });
  };

  const handleTopNavClick = (item: { label: string; href: string }) => {
    router.push(item.href);
    logAction('top-nav-click', item.label);
  };

  const handleTopNavExtraClick = (item: { label: string; href: string }) => {
    router.push(item.href);
    logAction('top-nav-extra-click', item.label);
  };

  const handleToggleFeaturesExpand = () => {
    const nextExpanded = !isFeaturesExpanded;
    setIsFeaturesExpanded(nextExpanded);
    setIsExpandedSearchActive(false);
    logAction(
      'toggle-features-expand',
      nextExpanded ? 'expanded' : 'collapsed',
    );
  };

  const handleMobileNavClick = (item: { label: string; href: string }) => {
    router.push(item.href);
    setIsMobileMenuOpen(false);
    logAction('mobile-nav-click', item.label);
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    logAction('search-skills-change', event.target.value);
  };

  const handleSearchInputBlur = (_event: FocusEvent<HTMLInputElement>) => {
    if (isFeaturesExpanded) {
      setIsExpandedSearchActive(false);
    }
  };

  const handleSearchInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape' && isFeaturesExpanded) {
      setIsExpandedSearchActive(false);
    }
  };

  return (
    <header className="flex flex-col gap-3 rounded-t-xl border border-[#dfe3e8] bg-white px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
      <div className="flex items-center justify-between gap-7">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo/logo_it.png"
            alt="Service4Me logo"
            width={28}
            height={28}
            className="h-7 w-7 cursor-pointer rounded-full object-cover"
            priority
            onClick={() => router.push('/profile')}
          />
          <button
            type="button"
            onClick={() => router.push('/profile')}
            className="text-2xl font-bold tracking-tight text-[#253042]"
          >
            Service4Me
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            const nextOpen = !isMobileMenuOpen;
            setIsMobileMenuOpen(nextOpen);
            logAction('toggle-mobile-menu', nextOpen ? 'open' : 'closed');
          }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="px-1 text-xl font-bold leading-none text-[#6f9662] transition hover:text-[#4f7d48] md:hidden"
        >
          <span
            className={`inline-block transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            {'>'}
          </span>
        </button>

        <div className="hidden md:block">
          <nav className="flex flex-nowrap items-center gap-8">
            {topNavPrimaryItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleTopNavClick(item)}
                className={`whitespace-nowrap text-sm font-semibold transition hover:text-[#5f955d] ${
                  pathname === item.href ? 'text-[#5f955d]' : 'text-[#253042]'
                }`}
              >
                {item.label}
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
                    key={item.label}
                    type="button"
                    onClick={() => handleTopNavExtraClick(item)}
                    className={`whitespace-nowrap text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[#5f955d] ${
                      isFeaturesExpanded
                        ? 'pointer-events-auto translate-x-0 opacity-100'
                        : 'pointer-events-none translate-x-1 opacity-0'
                    } ${
                      pathname === item.href
                        ? 'text-[#5f955d]'
                        : 'text-[#253042]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleFeaturesExpand}
              aria-label={
                isFeaturesExpanded ? 'Collapse features' : 'Show more features'
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

      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mt-1 flex flex-col gap-1 rounded-xl border border-[#e7ebf0] bg-[#f8faf6] p-2">
          {[...topNavPrimaryItems, ...topNavExtraItems].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleMobileNavClick(item)}
              className={`rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
                pathname === item.href
                  ? 'bg-[#edf4e7] text-[#5f955d]'
                  : 'text-[#253042] hover:bg-[#eef3e8]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
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
              const query = searchValue.trim();
              router.push(
                query
                  ? `/marketplace?q=${encodeURIComponent(query)}`
                  : '/marketplace',
              );
              logAction('search-skills-submit', query);
            }}
          >
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </span>
            <input
              ref={searchInputRef}
              value={searchValue}
              onChange={handleSearchInputChange}
              onBlur={handleSearchInputBlur}
              onKeyDown={handleSearchInputKeyDown}
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
          onClick={() => {
            router.push('/login');
            logAction('login-click');
          }}
          className="rounded-xl bg-[#eef3e7] px-4 py-2.5 text-sm font-bold text-[#6f9662] transition hover:bg-[#e5eddd]"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => {
            router.push('/signup');
            logAction('sign-up-click');
          }}
          className="whitespace-nowrap rounded-xl bg-[#79a962] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#6a9955]"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

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

export default MainNavbar;

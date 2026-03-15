import Link from 'next/link';
import { ServiceCardProps } from '@/types/service-card';

const ServiceCard = ({
    href,
    imageSrc,
    imageAlt = '',
    hours,
    category,
    title,
    description,
    authorName,
    authorAvatarSrc,
    scheduledAt,
}: ServiceCardProps) => {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8ecef] bg-white shadow-[0_4px_16px_rgba(15,28,58,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,28,58,0.12)]"
        >
            <div className="relative h-48 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageSrc}
                    alt={imageAlt || title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wide text-[#0f1c3a] shadow-sm backdrop-blur-sm">
                    {hours} HOUR{hours !== 1 ? 'S' : ''}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center gap-1.5">
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#85b065"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                    <span className="text-xs font-bold tracking-[0.12em] text-[#85b065]">
                        {category.toUpperCase()}
                    </span>
                </div>

                <h3 className="text-lg font-bold leading-snug text-[#0f1c3a] transition-colors group-hover:text-[#85b065]">
                    {title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#637381] line-clamp-2">
                    {description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#f0f3f6] pt-4">
                    <div className="flex items-center gap-2.5">
                        {authorAvatarSrc ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={authorAvatarSrc}
                                alt={authorName}
                                className="h-8 w-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ebf2e6] text-xs font-bold text-[#3d5a30]">
                                {authorName.charAt(0)}
                            </div>
                        )}
                        <span className="text-sm font-medium text-[#1b2540]">{authorName}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#8c9bad]">
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <polyline points="12 7 12 12 15 15" />
                        </svg>
                        <span>{scheduledAt}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;

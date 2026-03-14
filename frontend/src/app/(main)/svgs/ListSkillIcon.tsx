import { SVGProps } from 'react';

const ListSkillIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <line x1="8" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="8" y1="18" x2="14" y2="18" />
            <path d="M3 6h.01M3 12h.01M3 18h.01" />
            <path d="m17 17 4 4" />
        </svg>
    );
};

export default ListSkillIcon;

import { SVGProps } from 'react';

const SwapTimeIcon = (props: SVGProps<SVGSVGElement>) => {
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
            <path d="M3 11V5a2 2 0 0 1 2-2h6" />
            <path d="m3 5 4 4" />
            <path d="M21 13v6a2 2 0 0 1-2 2h-6" />
            <path d="m21 19-4-4" />
            <rect x="8" y="8" width="8" height="8" rx="1" />
        </svg>
    );
};

export default SwapTimeIcon;

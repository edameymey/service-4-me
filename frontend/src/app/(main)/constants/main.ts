import { FindNeedIcon, ListSkillIcon, SwapTimeIcon } from '../svgs';

export type ProcessStep = {
    title: string;
    description: string;
    icon: typeof ListSkillIcon;
};

export const PROCESS_STEPS: ProcessStep[] = [
    {
        title: 'List Your Skill',
        description:
            'Share what you can offer, from urban gardening to Python coding. Be as specific as you like.',
        icon: ListSkillIcon,
    },
    {
        title: 'Find a Need',
        description:
            'Browse local requests or global virtual needs. Filter by category, location, or urgency.',
        icon: FindNeedIcon,
    },
    {
        title: 'Swap Time',
        description:
            'Complete the exchange directly with another person. One hour of your time for one hour of theirs — fair and simple.',
        icon: SwapTimeIcon,
    },
];
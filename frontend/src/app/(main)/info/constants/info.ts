export const steps = [
    {
        id: 'offer',
        title: '1. Offer a Skill',
        description:
            'List what you love to do and share your talents with others. Whether it\'s gardening, coding, or baking.',
        icon: 'spark',
    },
    {
        id: 'earn',
        title: '2. Build Your Contribution',
        description:
            'Complete a service for a neighbor and strengthen your contribution profile in the community.',
        icon: 'clock',
    },
    {
        id: 'spend',
        title: '3. Request and Spend',
        description:
            'Request support from the community whenever you need it, based on fair and mutual contribution.',
        icon: 'cart',
    },
] as const;

export const values = [
    {
        id: 'community',
        title: 'Community Focus',
        text: 'Build meaningful relationships with those living near you. It\'s more than a transaction; it\'s a neighborhood bond.',
        icon: 'users',
    },
    {
        id: 'equality',
        title: 'Equality for All',
        text: 'A math lesson and a dog walk are valued with the same respect. Every contribution matters.',
        icon: 'bars',
    },
    {
        id: 'sharing',
        title: 'Skill Sharing',
        text: 'Learn new things and share your expertise with eager neighbors. Everyone has something valuable to teach.',
        icon: 'badge',
    },
    {
        id: 'economy',
        title: 'Non-Monetary Economy',
        text: 'Keep your money in your pocket. Access services you need by contributing your own unique skills.',
        icon: 'piggy',
    },
] as const;

export const faqs = [
    {
        id: 'exchange',
        question: 'How does a service exchange work?',
        answer:
            'You offer help, complete a service, and the receiver confirms it in the app.',
    },
    {
        id: 'skills',
        question: 'Do I need any specific skills to start?',
        answer: 'Every skill can be somebody\'s need, so the answear is no.',
    },
    {
        id: 'verify',
        question: 'How do I verify a service?',
        answer:
            'After a service is complete, the receiver confirms the completed work via the app.',
    },
] as const;
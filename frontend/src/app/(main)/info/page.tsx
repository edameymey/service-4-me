import Link from 'next/link';

const steps = [
  {
    id: 'offer',
    title: '1. Offer a Skill',
    description:
      "List what you love to do and share your talents with others. Whether it's gardening, coding, or baking.",
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

const values = [
  {
    id: 'community',
    title: 'Community Focus',
    text: "Build meaningful relationships with those living near you. It's more than a transaction; it's a neighborhood bond.",
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

const faqs = [
  {
    id: 'exchange',
    question: 'How does a service exchange work?',
    answer:
      'You offer help, complete a service, and the receiver confirms it in the app.',
  },
  {
    id: 'skills',
    question: 'Do I need any specific skills to start?',
    answer: "Every skill can be somebody's need, so the answear is no.  ",
  },
  {
    id: 'verify',
    question: 'How do I verify a service?',
    answer:
      'After a service is complete, the receiver confirms the completed work via the app.',
  },
] as const;

const InfoPage = () => {
  return (
    <section className="px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section>
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-[#161f37] sm:text-5xl">
            Three Simple Steps
          </h1>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.id}
                className="rounded-xl border border-[#dce3d7] bg-[#f8faf7] p-6 text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#89ac67] text-[#17233d]">
                  <StepIcon icon={step.icon} />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-[#1a2440]">
                  {step.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#637381]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#e1e6dc] bg-[#eff3ed] px-6 py-9 sm:px-16 sm:py-12">
          <h2 className="text-[26px] font-extrabold tracking-tight text-[#161f37] sm:text-[34px]">
            Why Skill Bartering?
          </h2>
          <p className="mt-3 text-[13px] leading-6 text-[#5f6f7f] sm:text-[14px] sm:leading-6">
            Experience a new way of connecting where every contribution is
            respected, regardless of the task.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.id} className="flex gap-3">
                <div className="mt-1 text-[#89ac67]">
                  <ValueIcon icon={value.icon} />
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight text-[#1a2440] sm:text-[24px]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-5 text-[#5f6f7f] sm:text-[13px] sm:leading-6">
                    {value.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-center text-[28px] font-extrabold tracking-tight text-[#161f37] sm:text-[42px]">
            Common Questions
          </h2>

          <div className="mx-auto mt-8 flex w-full max-w-[920px] flex-col gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.id}
                className="rounded-2xl border border-[#d8ded6] bg-[#f7faf7] px-5 py-4 sm:px-6"
              >
                <h3 className="text-[18px] font-bold tracking-tight text-[#1a2440] sm:text-[20px]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-[#637381] sm:text-[15px] sm:leading-7">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#8fb271] px-6 py-10 text-center shadow-[0_18px_30 px_-20px_rgba(32,56,22,0.4)] sm:px-10 sm:py-12">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#131e3b] sm:text-6xl">
            Ready to join your neighbors?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#1f3550] sm:text-xl">
            Join thousands of others who are sharing skills to build a better,
            more connected community today.
          </p>
          <Link
            href="/signup"
            className="mt-7 inline-flex rounded-xl bg-[#0f1f46] px-7 py-3 text-lg font-bold text-[#d6f5a6] transition hover:bg-[#122a5e]"
          >
            Join the Community
          </Link>
        </section>
      </div>
    </section>
  );
};

const StepIcon = ({ icon }: { icon: (typeof steps)[number]['icon'] }) => {
  if (icon === 'spark') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 8h6M7 12h4M14 6l5 5-5 5" />
      </svg>
    );
  }

  if (icon === 'clock') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 7h10l-1 11H8L7 7z" />
      <path d="M9 7a3 3 0 016 0" />
      <path d="M10 12h4" />
    </svg>
  );
};

const ValueIcon = ({ icon }: { icon: (typeof values)[number]['icon'] }) => {
  if (icon === 'users') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M8 12a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM3 20a5 5 0 0110 0H3zm8 0a5 5 0 0110 0h-10z" />
      </svg>
    );
  }

  if (icon === 'bars') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M5 20V9h3v11H5zm5 0V4h3v16h-3zm5 0v-7h3v7h-3z" />
      </svg>
    );
  }

  if (icon === 'badge') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2l2.3 2.5 3.4-.4.8 3.3 3.1 1.6-1.6 3.1 1.6 3.1-3.1 1.6-.8 3.3-3.4-.4L12 22l-2.3-2.5-3.4.4-.8-3.3-3.1-1.6 1.6-3.1-1.6-3.1 3.1-1.6.8-3.3 3.4.4L12 2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M7 7h10v10H7z" />
      <circle cx="9" cy="9" r="1.2" fill="#f8faf7" />
      <path d="M4 8h3v8H4zM17 10h3v6h-3z" />
    </svg>
  );
};

export default InfoPage;

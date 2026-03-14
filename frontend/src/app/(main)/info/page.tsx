import Link from 'next/link';
import { faqs, steps, values } from '@/app/(main)/info/constants/info';
import { StepIcon, ValueIcon } from '@/app/(main)/info/svgs/info';

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

export default InfoPage;

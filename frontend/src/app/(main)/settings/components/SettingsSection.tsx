import type { ReactNode, Ref } from 'react';

type SettingsSectionProps = {
  title: string;
  children: ReactNode;
  sectionRef?: Ref<HTMLElement>;
};

export const SettingsSection = ({
  title,
  children,
  sectionRef,
}: SettingsSectionProps) => {
  return (
    <section ref={sectionRef}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#96a2b1]">
        {title}
      </p>
      {children}
    </section>
  );
};

import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 mb-6">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
};

export default Section;
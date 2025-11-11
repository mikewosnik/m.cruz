import React from 'react';
import type { ResumeData } from '../types';
import Header from './Header';
import Section from './Section';
import ContactInfo from './ContactInfo';
import Skills from './Skills';
import AffinityChart from './AffinityChart';

interface LeftColumnProps {
  resumeData: ResumeData;
}

const LeftColumn: React.FC<LeftColumnProps> = ({ resumeData }) => {
  return (
    <div className="md:sticky md:top-12">
      <Header 
        name={resumeData.name} 
        title={resumeData.title} 
        imageUrl={resumeData.imageUrl}
      />
      <div className="space-y-12 mt-12">
        <Section title="Contato">
          <ContactInfo contact={resumeData.contact} />
        </Section>
        <Section title="Habilidades">
          <Skills skills={resumeData.skills} />
        </Section>
        {/* Seção de Afinidades visível apenas no desktop */}
        <div className="hidden md:block">
          <Section title="Afinidades">
            <AffinityChart data={resumeData.affinities} />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
import React from 'react';
import type { ResumeData } from '../types';
import Section from './Section';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import InstagramFeed from './InstagramFeed';

interface RightColumnProps {
  resumeData: ResumeData;
}

const RightColumn: React.FC<RightColumnProps> = ({ resumeData }) => {
  return (
    <div className="space-y-16">
      <Section title="Sobre Mim">
        <About text={resumeData.about} />
      </Section>
      <Section title="Experiência de Trabalho">
        <Experience items={resumeData.experience} />
      </Section>
      <Section title="Formação">
        <Education items={resumeData.education} />
      </Section>
      <Section title="Trabalhos recentes">
        <InstagramFeed posts={resumeData.instagramPosts} />
      </Section>
    </div>
  );
};

export default RightColumn;
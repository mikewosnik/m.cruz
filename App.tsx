import React from 'react';
import { resumeData } from './data/resumeData';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Footer from './components/Footer';
import Section from './components/Section';
import AffinityChart from './components/AffinityChart';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
      
      <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-16">
        <aside className="md:col-span-5 lg:col-span-4">
          <LeftColumn resumeData={resumeData} />
        </aside>
        
        <main className="md:col-span-7 lg:col-span-8 mt-16 md:mt-0 md:pt-80">
          <RightColumn resumeData={resumeData} />
        </main>
      </div>

      {/* Seção de Afinidades visível apenas no mobile */}
      <div className="md:hidden mt-16">
        <Section title="Afinidades">
          <AffinityChart data={resumeData.affinities} />
        </Section>
      </div>

      <Footer address={resumeData.address} name={resumeData.name} />
    </div>
  );
};

export default App;
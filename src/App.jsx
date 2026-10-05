import React, { useState, useEffect } from 'react';
import { portfolioData as initialData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certifications from './components/Certifications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ResumeUploaderBanner from './components/ResumeUploaderBanner';

export default function App() {
  const [data, setData] = useState(initialData);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleUpdateData = (newData) => {
    setData({ ...newData });
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Editorial Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        personal={data.personal}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero
          personal={data.personal}
          stats={data.stats}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <AboutSection personal={data.personal} />

        <Projects projects={data.projects} />

        <SkillsMatrix skillCategories={data.skillCategories} />

        <ExperienceTimeline
          experience={data.experience}
          education={data.education}
        />

        <Certifications
          certifications={data.certifications}
          testimonials={data.testimonials}
        />

        <ContactSection personal={data.personal} />
      </main>

      {/* Editorial Footer */}
      <Footer personal={data.personal} />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={data}
      />

      {/* Interactive Helper Banner for Resume Customization */}
      <ResumeUploaderBanner
        onUpdateData={handleUpdateData}
        currentData={data}
      />
    </div>
  );
}

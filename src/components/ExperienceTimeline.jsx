import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline({ experience, education }) {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedItems, setExpandedItems] = useState({ 0: true });

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="section-label">Chronology</span>
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                }}
              >
                Experience & Education
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '620px', marginTop: '6px' }}>
                Academic foundation, frontend engineering internship, and CRM automation experience.
              </p>
            </div>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              backgroundColor: 'var(--bg-elevated)',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
            }}
          >
            <button
              onClick={() => setActiveTab('experience')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: activeTab === 'experience' ? 'var(--accent-primary)' : 'transparent',
                color: activeTab === 'experience' ? 'var(--accent-foreground)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <Briefcase size={15} />
              <span>Experience ({experience.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: activeTab === 'education' ? 'var(--accent-primary)' : 'transparent',
                color: activeTab === 'education' ? 'var(--accent-foreground)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <GraduationCap size={15} />
              <span>Education ({education.length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        {activeTab === 'experience' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {experience.map((item, idx) => {
              const isExpanded = !!expandedItems[idx];
              return (
                <div
                  key={idx}
                  className="editorial-card"
                  style={{
                    padding: '24px 28px',
                    transition: 'all var(--transition-normal)',
                  }}
                >
                  {/* Top Bar */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      cursor: 'pointer',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.role}
                        </h3>
                        <span className="badge" style={{ backgroundColor: 'var(--bg-elevated)', fontSize: '0.74rem' }}>
                          {item.type}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.company}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
                          <Calendar size={14} />
                          {item.period}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
                          <MapPin size={14} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <button
                      className="btn-icon"
                      style={{ width: '32px', height: '32px', flexShrink: 0 }}
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  {/* Description */}
                  <p style={{ marginTop: '14px', fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>

                  {/* Expandable Key Outcomes */}
                  {isExpanded && (
                    <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                      <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                        Key Outcomes & Responsibilities:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                            <CheckCircle2 size={15} color="var(--accent-success)" style={{ marginTop: '3px', flexShrink: 0 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '0.74rem',
                              fontFamily: 'var(--font-mono)',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              backgroundColor: 'var(--bg-subtle)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="editorial-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {edu.institution}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="badge" style={{ marginBottom: '4px' }}>{edu.period}</span>
                    <div style={{ fontSize: '0.84rem', color: 'var(--accent-highlight)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {edu.grade}
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, borderTop: '1px solid var(--border-light)', paddingTop: '12px' }}>
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Code, Database, BarChart3, Server, Check } from 'lucide-react';

export default function SkillsMatrix({ skillCategories }) {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code size={18} />;
      case 'Database': return <Database size={18} />;
      case 'BarChart3': return <BarChart3 size={18} />;
      case 'Server': return <Server size={18} />;
      default: return <Code size={18} />;
    }
  };

  const currentCategory = skillCategories[activeTab] || skillCategories[0];

  return (
    <section id="skills" style={{ padding: '72px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '32px' }}>
          <span className="section-label">Competencies</span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
              marginBottom: '6px',
            }}
          >
            Technical Skills
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '640px' }}>
            Core competencies across programming, business intelligence, deep learning, and development tools.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            marginBottom: '28px',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeTab === idx ? 'var(--text-primary)' : 'var(--border-light)',
                backgroundColor: activeTab === idx ? 'var(--text-primary)' : 'var(--bg-surface)',
                color: activeTab === idx ? 'var(--bg-primary)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Clean, Full-Width Category Card */}
        <div
          className="editorial-card"
          style={{
            padding: '32px',
            borderRadius: '12px',
          }}
        >
          {/* Active Category Header */}
          <div style={{ marginBottom: '28px', paddingBottom: '18px', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ color: 'var(--accent-highlight)' }}>
                {getCategoryIcon(currentCategory.icon)}
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {currentCategory.category}
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
              {currentCategory.description}
            </p>
          </div>

          {/* 2-Column Responsive Grid of Skills */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px 36px',
            }}
          >
            {currentCategory.skills.map((skill) => (
              <div key={skill.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          backgroundColor: 'var(--bg-subtle)',
                          color: 'var(--accent-highlight)',
                          fontWeight: 600,
                        }}
                      >
                        CORE
                      </span>
                    )}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Clean Progress Bar */}
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    backgroundColor: 'var(--bg-elevated)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      backgroundColor: 'var(--text-primary)',
                      borderRadius: '3px',
                      transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Target, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ personal }) {
  const principles = [
    {
      icon: <Target size={20} color="var(--accent-highlight)" />,
      title: "Decisive Business Impact",
      description: "Data without decision is overhead. Every model, metric, and visualization I engineer is tied directly to reducing churn, finding revenue leakages, or optimizing operational velocity."
    },
    {
      icon: <Cpu size={20} color="var(--accent-highlight)" />,
      title: "Rigorous Python Engineering",
      description: "Moving beyond ad-hoc Jupyter notebooks. I build modular, vectorized, and containerized Python pipelines with unit tests, type hinting, and automated scheduling."
    },
    {
      icon: <TrendingUp size={20} color="var(--accent-highlight)" />,
      title: "Clear Data Storytelling",
      description: "Translating multi-dimensional math and algorithmic outputs into compelling, intuitive narratives that executive leadership and cross-functional teams trust."
    }
  ];

  return (
    <section id="about" style={{ padding: '64px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px', alignItems: 'start' }}>
          {/* Bio Story */}
          <div>
            <span className="section-label">Perspective & Focus</span>
            <h2 className="editorial-title" style={{ fontSize: '2.2rem', marginBottom: '24px' }}>
              Bridging mathematical theory and <span className="editorial-italic">real-world execution</span>.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7 }}>
              {personal.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div style={{ marginTop: '28px', padding: '16px 20px', background: 'var(--bg-elevated)', borderRadius: '8px', borderLeft: '3px solid var(--accent-highlight)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4px' }}>
                Primary Tooling & Frameworks:
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Python • SQL • Power BI (DAX & Power Query) • TensorFlow • YOLO • HTML5 / CSS3 • Git & GitHub • MS Excel
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="editorial-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {principle.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>
                    {principle.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

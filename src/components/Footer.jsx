import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './Icons';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-light)',
        backgroundColor: 'var(--bg-surface)',
        padding: '60px 0 36px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Brand info */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--accent-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}
              >
                {personal.name ? personal.name.charAt(0) : 'P'}
              </div>
              <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                {personal.name}
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Data Analyst & Python Developer specializing in exploratory data analysis, predictive statistical models, interactive business intelligence, and scalable ETL workflows.
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub">
                <GithubIcon size={15} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn">
                <LinkedinIcon size={15} />
              </a>
              {personal.kaggle && personal.kaggle !== personal.github && (
                <a href={personal.kaggle} target="_blank" rel="noreferrer" className="btn-icon" title="Kaggle">
                  <KaggleIcon size={15} />
                </a>
              )}
              <a href={`mailto:${personal.email}`} className="btn-icon" title="Email">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', letterSpacing: '0.08em' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <li><a href="#about">Perspective</a></li>
                <li><a href="#projects">Selected Projects</a></li>
                <li><a href="#skills">Competencies</a></li>
                <li><a href="#experience">Career History</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Get in Touch</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', letterSpacing: '0.08em' }}>
                Stack
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <li>Python & TensorFlow</li>
                <li>Power BI & DAX</li>
                <li>SQL & Relational DBs</li>
                <li>YOLO & CNN Vision</li>
                <li>HTML5 / CSS3 / JavaScript</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. Editorial Portfolio Edition.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-ghost"
            style={{ fontSize: '0.8rem', padding: '6px 12px' }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

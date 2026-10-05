import React from 'react';
import { Award, ExternalLink, Quote } from 'lucide-react';

export default function Certifications({ certifications, testimonials }) {
  return (
    <section id="certifications" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Certifications Header */}
        <div style={{ marginBottom: '36px' }}>
          <span className="section-label">Validation & Credentials</span>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--text-primary)',
            }}
          >
            Certifications
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '620px', marginTop: '6px' }}>
            NPTEL certified qualifications in Data Structures and Cloud Computing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '64px',
          }}
        >
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="editorial-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--bg-elevated)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-highlight)',
                    }}
                  >
                    <Award size={18} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {cert.date}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.35 }}>
                  {cert.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  {cert.issuer}
                </div>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  ID: {cert.credentialId}
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    color: 'var(--accent-highlight)',
                  }}
                >
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Testimonials / Endorsements */}
        {testimonials && testimonials.length > 0 && (
          <div>
            <div style={{ marginBottom: '28px' }}>
              <span className="section-label">Endorsements</span>
              <h3 className="editorial-title" style={{ fontSize: '1.8rem' }}>
                What engineering & product leaders say.
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="editorial-card"
                  style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--bg-elevated)',
                  }}
                >
                  <Quote size={24} color="var(--text-muted)" style={{ opacity: 0.5, marginBottom: '14px' }} />
                  <p
                    className="font-serif"
                    style={{
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      color: 'var(--text-primary)',
                      marginBottom: '20px',
                    }}
                  >
                    "{test.quote}"
                  </p>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                      {test.author}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {test.role}, {test.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

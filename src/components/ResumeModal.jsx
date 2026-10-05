import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy, ExternalLink, Sparkles, Upload } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const { personal, experience, education, skillCategories, certifications } = data;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
============================================================
${personal.name.toUpperCase()} - ${personal.role.toUpperCase()}
Location: ${personal.location} | Email: ${personal.email} | Phone: ${personal.phone}
GitHub: ${personal.github} | LinkedIn: ${personal.linkedin}
============================================================

EXECUTIVE SUMMARY
------------------------------------------------------------
${personal.bio.join('\n\n')}

WORK EXPERIENCE
------------------------------------------------------------
${experience.map(e => `
${e.role.toUpperCase()} | ${e.company} (${e.period})
Location: ${e.location}
${e.highlights.map(h => `  • ${h}`).join('\n')}
Technologies: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION
------------------------------------------------------------
${education.map(ed => `
${ed.degree}
${ed.institution} (${ed.period}) - ${ed.grade}
${ed.details}
`).join('\n')}

TECHNICAL SKILLS
------------------------------------------------------------
${skillCategories.map(sc => `${sc.category}: ${sc.skills.map(s => s.name).join(', ')}`).join('\n')}

CERTIFICATIONS
------------------------------------------------------------
${certifications.map(c => `• ${c.name} - ${c.issuer} (${c.date}) [ID: ${c.credentialId}]`).join('\n')}
============================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${personal.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="modal-content print-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '880px',
          maxHeight: '92vh',
          backgroundColor: 'var(--bg-surface)',
          padding: 'clamp(20px, 4vw, 40px)',
          borderRadius: '12px',
        }}
      >
        {/* Action Bar */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge">Curriculum Vitae</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Editorial Document View
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '7px 12px' }}
              title="Print directly or save as PDF"
            >
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="btn btn-primary"
              style={{ fontSize: '0.82rem', padding: '7px 14px' }}
            >
              {downloadSuccess ? <Check size={15} /> : <Download size={15} />}
              <span>{downloadSuccess ? 'Downloaded!' : 'Download Clean Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="btn-icon"
              style={{ width: '34px', height: '34px' }}
              aria-label="Close modal"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Printable Editorial Resume Content */}
        <div style={{ color: 'var(--text-primary)' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid var(--text-primary)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 className="editorial-title" style={{ fontSize: '2.4rem', marginBottom: '6px' }}>
              {personal.name}
            </h1>
            <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '10px' }}>
              {personal.role}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.86rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>{personal.location}</span>
              <span>•</span>
              <span>{personal.email}</span>
              <span>•</span>
              <span>{personal.phone}</span>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Executive Profile
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {personal.bio.map((b, idx) => (
                <p key={idx}>{b}</p>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Professional Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.02rem', color: 'var(--text-primary)' }}>
                      {exp.role} — <span style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>{exp.company}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  <ul style={{ paddingLeft: '18px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Technical Core
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              {skillCategories.map((sc) => (
                <div key={sc.category}>
                  <strong style={{ color: 'var(--text-primary)' }}>{sc.category}: </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {sc.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.98rem' }}>{edu.degree}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{edu.institution}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {edu.period} • {edu.grade}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Certifications
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {certifications.map((c, idx) => (
                <span key={idx} className="badge" style={{ fontSize: '0.78rem' }}>
                  {c.name} ({c.issuer}, {c.date})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-content, .print-content * {
            visibility: visible;
          }
          .print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            padding: 20px !important;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

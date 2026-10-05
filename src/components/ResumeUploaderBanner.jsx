import React, { useState } from 'react';
import { UploadCloud, CheckCircle, FileText, Edit3, X, Sparkles } from 'lucide-react';

export default function ResumeUploaderBanner({ onUpdateData, currentData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pasteText, setPasteText] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleTextParse = () => {
    if (!pasteText.trim()) return;

    // Simple heuristic parser for quick preview or updating personal name & summary
    const lines = pasteText.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 0) {
      const updated = { ...currentData };
      if (lines[0]) updated.personal.name = lines[0];
      if (lines[1] && lines[1].length < 60) updated.personal.role = lines[1];
      
      // Update data
      onUpdateData(updated);
      setStatusMessage('Resume details applied to portfolio!');
      setTimeout(() => {
        setStatusMessage('');
        setIsOpen(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* Subtle floating helper pill */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 900,
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary floating-resume-btn"
          style={{
            boxShadow: 'var(--shadow-lg)',
            padding: '10px 16px',
            fontSize: '0.84rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          title="Upload or Customize Resume Details"
        >
          <UploadCloud size={16} />
          <span className="floating-btn-text">Customize Resume</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .floating-btn-text {
            display: none !important;
          }
          .floating-resume-btn {
            padding: 10px !important;
            border-radius: 50% !important;
            width: 42px !important;
            height: 42px !important;
            justify-content: center !important;
          }
        }
      `}</style>

      {/* Modal for quick paste or upload */}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} color="var(--accent-highlight)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Update Portfolio with Your Resume</h3>
              </div>
              <button className="btn-icon" onClick={() => setIsOpen(false)}>
                <X size={16} />
              </button>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              You can paste your resume text below, drop a resume file into your project folder (<code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', background: 'var(--bg-elevated)', padding: '2px 5px', borderRadius: '3px' }}>d:\Portfolio</code>), or paste it in the chat!
            </p>

            <textarea
              rows={8}
              placeholder="Paste your resume content here (Name, contact, experience, skills, projects)..."
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid var(--border-medium)',
                backgroundColor: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                outline: 'none',
                resize: 'vertical',
                marginBottom: '16px',
              }}
            />

            {statusMessage && (
              <div style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-success)', fontSize: '0.84rem', marginBottom: '16px' }}>
                {statusMessage}
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button className="btn btn-secondary" onClick={() => setIsOpen(false)} style={{ fontSize: '0.84rem' }}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleTextParse} style={{ fontSize: '0.84rem' }}>
                <Sparkles size={14} />
                <span>Apply to Live Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

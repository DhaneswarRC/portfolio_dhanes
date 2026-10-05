import React, { useState } from 'react';
import { ArrowDown, FileText, Mail, Camera, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ personal, stats, onOpenResume }) {
  const [avatarImage, setAvatarImage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-avatar-image') || null;
    } catch {
      return null;
    }
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // Resize and compress cleanly to 320x320 for optimal quality and small localStorage footprint
          const canvas = document.createElement('canvas');
          const maxDim = 320;
          let width = img.width;
          let height = img.height;
          if (width > height) {
            if (width > maxDim) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            }
          } else {
            if (height > maxDim) {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);

          setAvatarImage(compressedDataUrl);
          try {
            localStorage.setItem('portfolio-avatar-image', compressedDataUrl);
          } catch (storageErr) {
            console.warn('Storage limit reached', storageErr);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAvatarImage(null);
    try {
      localStorage.removeItem('portfolio-avatar-image');
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <section style={{ paddingTop: '56px', paddingBottom: '64px' }}>
      <div className="container">
        {/* Availability Badge */}
        <div style={{ marginBottom: '24px' }}>
          <div className="badge-live">
            <span className="status-dot"></span>
            <span>{personal.availability}</span>
          </div>
        </div>

        {/* Clean, Simple Introduction with Photo Avatar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '32px',
          }}
        >
          {/* Simple Photo Avatar */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-elevated)',
                border: '3px solid var(--border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {avatarImage ? (
                <img
                  src={avatarImage}
                  alt={personal.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ textAlign: 'center', color: 'var(--text-primary)' }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
                    DR
                  </div>
                </div>
              )}
            </div>

            {/* Photo Upload Trigger */}
            <label
              title="Click to upload your profile photo"
              style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--accent-foreground)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '2px solid var(--bg-surface)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            >
              <Camera size={15} />
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
              />
            </label>

            {/* Remove photo button if photo exists */}
            {avatarImage && (
              <button
                onClick={handleRemovePhoto}
                title="Remove photo and reset to initials"
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ef4444';
                  e.currentTarget.style.borderColor = '#ef4444';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Name & Primary Role */}
          <div>
            <div
              style={{
                fontSize: '1rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>👋 Hello, I'm</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '8px',
              }}
            >
              {personal.name}
            </h1>

            <div
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
              }}
            >
              {personal.role}
            </div>
          </div>
        </div>

        {/* Simple & Clear Bio Content */}
        <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '16px',
            }}
          >
            Computer Science graduate with a strong foundation in <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and data analysis. Seeking an entry-level role where I can contribute to organizational growth, build actionable business intelligence dashboards, and develop predictive data solutions.
          </p>

          {/* Quick Skill Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Core Focus:
            </span>
            <span className="badge">Python</span>
            <span className="badge">SQL</span>
            <span className="badge">Power BI</span>
            <span className="badge">Data Analytics</span>
            <span className="badge">TensorFlow & YOLO</span>
            <span className="badge">Frontend Development</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '36px' }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
            <span>Explore Projects</span>
            <ArrowDown size={16} />
          </a>

          <button
            onClick={onOpenResume}
            className="btn btn-secondary"
            style={{ padding: '12px 22px', fontSize: '0.95rem' }}
          >
            <FileText size={16} />
            <span>View Full Resume</span>
          </button>

          <a
            href={`mailto:${personal.email}`}
            className="btn btn-ghost"
            style={{ padding: '12px 20px', fontSize: '0.95rem' }}
          >
            <Mail size={16} />
            <span>{personal.email}</span>
          </a>
        </div>

        {/* Direct Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.76rem' }}>
            Profiles:
          </span>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <GithubIcon size={16} />
            <span style={{ fontWeight: 600 }}>GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <LinkedinIcon size={16} />
            <span style={{ fontWeight: 600 }}>LinkedIn</span>
          </a>
        </div>

        {/* Clean Stat Metric Cards */}
        <div
          style={{
            marginTop: '56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '18px',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="editorial-card"
              style={{
                padding: '22px',
                borderLeft: '3px solid var(--text-primary)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

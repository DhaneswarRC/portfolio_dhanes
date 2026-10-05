import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './Icons';

export default function ContactSection({ personal }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ state: 'error', message: 'Please fill out all required fields.' });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Transmitting message to Dhaneswar...' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Inquiry',
          message: formData.message,
          _subject: `[Portfolio Inquiry] ${formData.subject || 'Inquiry from ' + formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message was sent directly to my email box. I will get back to you shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus({ state: 'idle', message: '' }), 8000);
      } else {
        // Fallback to mailto if service is unavailable
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`;
        setFormStatus({
          state: 'success',
          message: 'Opening mail client to complete sending...'
        });
      }
    } catch (err) {
      // Graceful fallback
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`;
      setFormStatus({
        state: 'success',
        message: 'Opening mail client to send your message...'
      });
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'start' }}>
          {/* Left Column: Direct Info & Copy Button */}
          <div>
            <span className="section-label">Contact</span>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '14px',
              }}
            >
              Get in Touch
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Whether you are looking for an entry-level Data Analyst, Python developer, or Power BI dashboard creator, feel free to reach out!
            </p>

            {/* Quick Email Copy Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border-medium)',
                borderRadius: '8px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '28px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Direct Email
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {personal.email}
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', padding: '8px 12px' }}
                title="Copy to clipboard"
              >
                {copied ? <Check size={14} color="var(--accent-success)" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="var(--text-muted)" />
                <span>{personal.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} color="var(--text-muted)" />
                <span>{personal.phone}</span>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Profiles & Repositories
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href={personal.github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub">
                  <GithubIcon size={17} />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn">
                  <LinkedinIcon size={17} />
                </a>
                {personal.kaggle && personal.kaggle !== personal.github && (
                  <a href={personal.kaggle} target="_blank" rel="noreferrer" className="btn-icon" title="Kaggle">
                    <KaggleIcon size={17} />
                  </a>
                )}
                <a href={`mailto:${personal.email}`} className="btn-icon" title="Direct Email">
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="editorial-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '6px' }}>
              Send an Inquiry
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
              Fill in your details and I'll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Subject / Project Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. Analytics Engineer Role / ETL Consulting"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your team, problem space, or dataset requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-elevated)',
                    color: 'var(--text-primary)',
                    fontFamily: 'inherit',
                    fontSize: '0.92rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {formStatus.message && (
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '6px',
                    fontSize: '0.86rem',
                    backgroundColor: formStatus.state === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: formStatus.state === 'success' ? 'var(--accent-success)' : '#ef4444',
                    border: '1px solid',
                    borderColor: formStatus.state === 'success' ? 'var(--accent-success)' : '#ef4444',
                  }}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.state === 'submitting'}
                className="btn btn-primary"
                style={{ padding: '12px', width: '100%', marginTop: '8px' }}
              >
                <Send size={15} />
                <span>{formStatus.state === 'submitting' ? 'Sending...' : 'Transmit Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

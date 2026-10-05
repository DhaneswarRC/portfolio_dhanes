import React, { useState } from 'react';
import { ExternalLink, Code, ArrowUpRight, CheckCircle, X, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '36px' }}>
          <span className="section-label">Selected Case Studies</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text-primary)',
                }}
              >
                Projects
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '620px', marginTop: '6px' }}>
                Featured interactive dashboards and deep learning systems built with Power BI, Python, and SQL.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                background: 'var(--bg-elevated)',
                padding: '4px',
                borderRadius: '8px',
                border: '1px solid var(--border-light)',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    borderRadius: '6px',
                    color: selectedCategory === cat ? 'var(--accent-foreground)' : 'var(--text-secondary)',
                    backgroundColor: selectedCategory === cat ? 'var(--accent-primary)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                {/* Header: Category Badge + Actions */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="badge" style={{ backgroundColor: 'var(--bg-elevated)' }}>
                    {project.category}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon"
                        style={{ width: '32px', height: '32px' }}
                        title="GitHub Repository"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-icon"
                        style={{ width: '32px', height: '32px' }}
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    marginBottom: '10px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {project.title}
                </h3>

                {/* Tagline */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '18px' }}>
                  {project.tagline}
                </p>

                {/* Key Impact Points */}
                <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.impact.slice(0, 2).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={14} color="var(--accent-success)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Stack Chips & Modal Trigger */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.85rem', padding: '9px 12px' }}
                >
                  <Code size={15} />
                  <span>Inspect Methodology & Code</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="modal-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="badge" style={{ marginBottom: '8px' }}>
                  {activeProjectModal.category}
                </span>
                <h3 className="editorial-title" style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                className="btn-icon"
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Deep-dive Narrative */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Architecture & Implementation
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7 }}>
                {activeProjectModal.description}
              </p>
            </div>

            {/* Measurable Impact */}
            <div style={{ marginBottom: '24px', background: 'var(--bg-elevated)', padding: '18px', borderRadius: '8px' }}>
              <h4 style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Quantified Business Impact & Metrics
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeProjectModal.impact.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <CheckCircle size={16} color="var(--accent-success)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Snippet / SQL Query */}
            {activeProjectModal.codeSnippet && (
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Core Implementation Excerpt
                  </span>
                  <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Python / SQL
                  </span>
                </div>
                <pre
                  style={{
                    backgroundColor: 'var(--bg-code)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    padding: '16px',
                    borderRadius: '8px',
                    overflowX: 'auto',
                    border: '1px solid var(--border-light)',
                    lineHeight: 1.5,
                  }}
                >
                  <code>{activeProjectModal.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Tech Stack List */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '0.84rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Technologies & Libraries
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeProjectModal.stack.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.88rem' }}
                >
                  <GithubIcon size={15} />
                  <span>View Source Repository</span>
                </a>
              )}
              {activeProjectModal.demoUrl && (
                <a
                  href={activeProjectModal.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '0.88rem' }}
                >
                  <span>Launch Live System</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

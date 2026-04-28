import React from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

// Custom SVG Icons to avoid version mismatch errors and SyntaxErrors
const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const MastodonIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.268 5.313c-.35-1.678-2.617-2.523-4.422-2.523H5.154c-1.805 0-4.072.845-4.422 2.523a8.132 8.132 0 0 0 0 3.328c.35 1.678 2.617 2.523 4.422 2.523h13.692c1.805 0 4.072-.845 4.422-2.523a8.132 8.132 0 0 0 0-3.328z"/>
  </svg>
);

const SearchIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

export const Navbar = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{ width: '32px' }} />
          <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>v19.2</span>
        </div>

        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', maxWidth: '500px' }} className="search-container">
          <div style={{ 
            background: 'var(--bg-secondary)', 
            borderRadius: '99px', 
            padding: '0.6rem 1rem 0.6rem 2.8rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid var(--border)',
            position: 'relative'
          }}>
            <SearchIcon size={18} style={{ position: 'absolute', left: '1.2rem', color: 'var(--text-muted)' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flex: 1 }}>Search</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={{ background: 'var(--bg-main)', border: '1px solid var(--border)', fontSize: '0.6rem', padding: '1px 5px', borderRadius: '4px', color: 'var(--text-muted)', fontWeight: 'bold' }}>Ctrl K</span>
            </div>
          </div>
        </div>

        <div className="nav-links">

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginLeft: '0.5rem' }}>
            <div onClick={toggleTheme} style={{ cursor: 'pointer', display: 'flex' }}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <Globe size={20} style={{ cursor: 'pointer' }} />
            <GitHubIcon size={22} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
  <footer style={{ background: 'var(--bg-main)', padding: '5rem 0', borderTop: '1px solid var(--border)' }}>
    <div className="container">
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: '800', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--primary)">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Meta Open Source
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Copyright © Meta Platforms, Inc</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>uwu?</p>
        </div>

        {[
          { title: 'Learn React', links: ['Quick Start', 'Installation', 'Describing the UI', 'Adding Interactivity', 'Managing State', 'Escape Hatches'] },
          { title: 'API Reference', links: ['React APIs', 'React DOM APIs'] },
          { title: 'Community', links: ['Code of Conduct', 'Meet the Team', 'Docs Contributors', 'Acknowledgements'] },
          { title: 'More', links: ['Blog', 'React Native', 'Privacy', 'Terms'] }
        ].map(section => (
          <div key={section.title}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '700' }}>{section.title}</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2.2', color: 'var(--text-main)', fontSize: '0.95rem' }}>
              {section.links.map(link => (
                <li key={link} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'inherit'}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.5rem', color: 'var(--text-muted)', marginTop: '2rem' }}>
        <FacebookIcon size={22} />
        <XIcon size={22} />
        <MastodonIcon size={22} />
        <GitHubIcon size={22} />
      </div>
    </div>
  </footer>
);

export const CodePreview = ({ title, description, code, preview, reverse = false }) => (
  <section className="section">
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{title}</h2>
      <p style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>{description}</p>
      <div className="code-preview-grid" style={{ direction: reverse ? 'rtl' : 'ltr' }}>
        <div className="code-block" style={{ direction: 'ltr' }}>
          <pre style={{ margin: 0 }}><code>{code}</code></pre>
        </div>
        <div className="preview-block" style={{ direction: 'ltr' }}>
          {preview}
        </div>
      </div>
    </div>
  </section>
);

export const VideoItem = ({ title, description, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }} className="hover-card">
    <div style={{ width: '50px', height: '30px', background: color, borderRadius: '6px', flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{title}</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{description}</div>
    </div>
  </div>
);

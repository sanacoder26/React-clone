import React, { useState, useEffect } from 'react';
import { CodePreview, VideoItem, Footer } from '../components/Common';

const SearchIcon = ({ size = 16, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const CommunitySlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) setItemsToShow(1);
      else if (window.innerWidth <= 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = images.length - itemsToShow;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <div className="slider-viewport">
        <div 
          className="slider-track" 
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            gap: '1.5rem'
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="slider-item">
              <img src={img} alt={`Community ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="slider-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const videos = [
    { title: 'First video', desc: 'Video description', color: '#087ea4' },
    { title: 'Second video', desc: 'Video description', color: '#404756' },
    { title: 'Third video', desc: 'Video description', color: '#087ea4' }
  ];

  const filteredVideos = videos.filter(v => v.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="home-page">
      <section className="hero" style={{ borderTop: 'none' }}>
        <div className="container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            style={{ width: 'clamp(80px, 15vw, 120px)', marginBottom: '1.5rem' }}
          />
          <h1>React</h1>
          <p>The library for web and native user interfaces</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Learn React</button>
            <button className="btn btn-secondary">API Reference</button>
          </div>
        </div>
      </section>

      <CodePreview 
        title="Create user interfaces from components"
        description="React lets you build user interfaces out of individual pieces called components."
        code={`function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <h3>{video.title}</h3>
    </div>
  );
}`}
        preview={
          <div className="preview-card" style={{ maxWidth: '300px', width: '100%' }}>
            <div style={{ background: '#087ea4', height: '100px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h3 style={{ marginTop: '1rem', fontSize: '1.1rem' }}>My video</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Video description</p>
          </div>
        }
      />

      <CodePreview 
        reverse
        title="Add interactivity wherever you need it"
        description="React components receive data and return what should appear on the screen."
        code={`const [searchText, setSearchText] = useState('');
return (
  <SearchInput 
    value={searchText} 
    onChange={e => setSearchText(e.target.value)} 
  />
);`}
        preview={
          <div className="preview-card" style={{ width: '100%' }}>
             <div style={{ position: 'relative', marginBottom: '1.5rem' }} className="search-container">
                <SearchIcon style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input 
                  type="text" 
                  style={{ width: '100%', padding: '0.6rem 2.5rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-main)' }} 
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {filteredVideos.map((v, i) => (
                  <VideoItem key={i} title={v.title} description={v.desc} color={v.color} />
                ))}
             </div>
          </div>
        }
      />

      <section className="section" style={{ borderTop: 'none' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            style={{ width: '80px', marginBottom: '2rem' }}
          />
          <h2>Welcome to the<br/>React community</h2>
          <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Get Started</button>
          
          <div style={{ marginTop: '5rem' }}>
            <p style={{ marginBottom: '3rem' }}>
              Join millions of developers building the future of the web.
            </p>
            <CommunitySlider />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

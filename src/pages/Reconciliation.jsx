import React, { useState } from 'react';
import { Footer } from '../components/Common';

const Reconciliation = () => {
  const [items, setItems] = useState(['Component A', 'Component B', 'Component C']);
  const [useKeys, setUseKeys] = useState(true);

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto', flex: 1 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Reconciliation</h1>
        <p style={{ fontSize: '1.2rem', color: '#57606a', marginBottom: '3rem' }}>
          React provides a declarative API so that you don’t have to worry about exactly what changes on every update. 
          This makes writing applications a lot easier, but it might not be obvious how React is implemented.
        </p>

        <section className="section" style={{ borderTop: '1px solid #ebedf0', padding: '3rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>The Diffing Algorithm</h2>
          <p style={{ marginBottom: '2rem' }}>
            When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. 
            When they are not equal, React will update the DOM.
          </p>

          <div style={{ background: '#f6f7f9', padding: '2rem', borderRadius: '16px', border: '1px solid #ebedf0' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Interactive Demo: Efficiency of Keys</h3>
            <p style={{ fontSize: '0.9rem', color: '#57606a', marginBottom: '1.5rem' }}>
              {useKeys 
                ? "✅ Keys are stable: React reorders elements without re-mounting them." 
                : "⚠️ No keys: React might re-mount elements, causing performance hits and loss of state."}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {items.map((item, index) => (
                <div 
                  key={useKeys ? item : index} 
                  style={{ 
                    padding: '1rem 2rem', 
                    background: '#087ea4', 
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'all 0.5s ease'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary" onClick={shuffle} style={{ fontSize: '0.9rem' }}>Shuffle Items</button>
              <button 
                className="btn btn-secondary" 
                onClick={() => setUseKeys(!useKeys)} 
                style={{ fontSize: '0.9rem', borderColor: useKeys ? '#087ea4' : '#ebedf0' }}
              >
                Keys: {useKeys ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Reconciliation;

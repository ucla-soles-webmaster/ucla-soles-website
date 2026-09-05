import React from 'react';

const Waiver = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Waiver</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 20px'}}>
                <div style={{textAlign: 'center', marginBottom: '32px'}}>
                    <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', color: '#2E86AB', marginBottom: '24px', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        All participants must complete and sign the liability waiver before participating in Copa del Sol.
                    </p>
                    <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <a href="https://drive.google.com/file/d/1oVIq5yhBdM_A4ZXP99HEjjLZERqIZy7M/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                           style={{backgroundColor: '#2E86AB', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: 'clamp(14px, 1.1vw, 18px)', fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
                            Download Waiver
                        </a>
                        <a href="https://drive.google.com/file/d/1oVIq5yhBdM_A4ZXP99HEjjLZERqIZy7M/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                           style={{backgroundColor: '#FF8C42', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: 'clamp(14px, 1.1vw, 18px)', fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
                            View in New Window
                        </a>
                    </div>
                </div>
                <div style={{borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '80px'}}>
                    <iframe 
                        src="https://drive.google.com/file/d/1oVIq5yhBdM_A4ZXP99HEjjLZERqIZy7M/preview" 
                        width="100%" 
                        height="600" 
                        frameBorder="0"
                        title="Copa del Sol Waiver"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Waiver;
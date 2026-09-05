import React from 'react';
import missionImage from '../../Photos/CopaDelSol/photo_gallery/13 soccer fans.JPG';

const Mission = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Mission</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '32px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.7', textAlign: window.innerWidth < 768 ? 'center' : 'justify', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
                        Copa del Sol is dedicated to bringing SHPE chapters from across Region 2 together to compete, collaborate and connect both on and off the field so they are empowered to work together to advance Hispanics in STEM. Learn more about <a href="https://shpe.org/about-shpe/" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>SHPE's mission</a>.
                        </p>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={missionImage} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
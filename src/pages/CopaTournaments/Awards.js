import React from 'react';
import awardsImage from '../../Photos/CopaDelSol/photo_gallery/2 Copa del Sol Trophies.JPG';

const Awards = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Awards</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'}}>
                        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                            <li style={{padding: '8px 0', fontSize: 'clamp(14px, 1.1vw, 18px)', color: '#333', fontFamily: 'Inter, sans-serif', borderBottom: '1px solid #f5f5f5'}}>Winning team gets the Copa del Sol Trophy for the year</li>
                            <li style={{padding: '8px 0', fontSize: 'clamp(14px, 1.1vw, 18px)', color: '#333', fontFamily: 'Inter, sans-serif', borderBottom: '1px solid #f5f5f5'}}>Championship game ball signed by all players on winning team</li>
                            <li style={{padding: '8px 0', fontSize: 'clamp(14px, 1.1vw, 18px)', color: '#333', fontFamily: 'Inter, sans-serif', borderBottom: '1px solid #f5f5f5'}}>Golden Boot Trophy for most goals scored by female and male player</li>
                            <li style={{padding: '8px 0', fontSize: 'clamp(14px, 1.1vw, 18px)', color: '#333', fontFamily: 'Inter, sans-serif', borderBottom: '1px solid #f5f5f5'}}>Golden Ball Trophy for second most goals scored by female and male player</li>
                            <li style={{padding: '8px 0', fontSize: 'clamp(14px, 1.1vw, 18px)', color: '#333', fontFamily: 'Inter, sans-serif'}}>Medals for Finalist teams</li>
                        </ul>
                    </div>
                    <div style={{flex: 1}}>
                        <img src={awardsImage} alt="Copa del Sol Trophies" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
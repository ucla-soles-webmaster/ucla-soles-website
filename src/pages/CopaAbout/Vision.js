import React from 'react';
import visionImage from '../../Photos/CopaDelSol/photo_gallery/3 SHPE group.jpeg';

const Vision = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Vision</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 0}}>
                        <img src={visionImage} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                    <div style={{flex: 1, backgroundColor: '#FF8C42', padding: '32px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 1}}>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.7', textAlign: window.innerWidth < 768 ? 'center' : 'justify', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
                            Copa del Sol's vision is a world where Hispanics and supporters can come play together in a competitive environment, but leave the field with stronger connections, so they can work together to make life better for the Hispanic community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
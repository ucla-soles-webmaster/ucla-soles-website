import React from 'react';
import whoWeAreImage from '../../Photos/CopaDelSol/photo_gallery/2 Copa del Sol Trophies.JPG';

const WhoWeAre = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Who We Are</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '32px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.7', textAlign: window.innerWidth < 768 ? 'center' : 'justify', margin: 0, fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
                            Copa del Sol is an annual soccer tournament hosted by Region 2 of the Society of Hispanic Professional Engineers (<a href="https://shpe.org/about-shpe/" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>SHPE</a>). Through friendly competition and shared experiences, we strive to strengthen relationships, promote teamwork, and foster a sense of community among our members. Copa del Sol has become one of the fastest-growing SHPE regional events, uniting students and professionals through a shared passion for soccer, leadership, and cultural pride.
                        </p>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={whoWeAreImage} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
import React from 'react';
import historyImage1 from '../../Photos/CopaDelSol/photo_gallery/SHPE R2 Copa Del Sol Soccer Tournament 2024.jpg';
import historyImage2 from '../../Photos/CopaDelSol/photo_gallery/SHPE R2 Soccer Tournament Champions - LI.jpeg';
import historyImage3 from '../../Photos/CopaDelSol/photo_gallery/5 SHPETina Showcase.JPG';

const History = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>History</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: window.innerWidth < 768 ? 'center' : 'justify', margin: 0, fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            In the fall of <strong>2023</strong>, following the SHPE Salt Lake Conference, a group of SHPE members led by <strong>Emanuel Zavalza (UCLA)</strong> and <strong>Martin Enriquez (HP Inc.)</strong> formed the SHPE R2 Copa del Sol Planning Committee. For several months, they reached out to other R2 SHPE chapters to gain interest in the first annual Copa del Sol soccer tournament. The name <strong>Copa del Sol</strong> was derived from the word Soles since the UCLA Soles chapter helped drive the initial formation.
                        </p>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={historyImage1} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 0}}>
                        <img src={historyImage2} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                    <div style={{flex: 1, backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 1}}>
                        <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: window.innerWidth < 768 ? 'center' : 'justify', margin: 0, fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            The first annual tournament was a beach soccer tournament hosted by <strong>UCLA</strong>, spring <strong>2024</strong>. Teams as far from San Diego and Santa Barbara traveled to participate in the competitive tournament. The first Copa del Sol Trophy was raised by <strong>UCSB Los Ingenieros</strong> who defeated UCLA in the Finals.
                        </p>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: window.innerWidth < 768 ? 'center' : 'justify', margin: 0, fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            The <a href="https://www.losingenierosucsb.org/copa-del-sol" target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>second annual Copa del Sol</a> was hosted by <strong>UCSB</strong>, spring <strong>2025</strong>. Participation doubled from its inaugural year, we were also joined by <strong>Cal Poly SLO</strong> from SHPE Region 1, who came ready to challenge Region 2. The final championship came down to <strong>Oxnard College and UCLA</strong> in a hard-fought match that ended with UCLA claiming victory. This same year also introduced a powerful new tradition—the <strong>SHPEtinas Showcase Match</strong>, created to elevate the visibility of women in SHPE and highlight female leadership, athleticism, and representation within STEM.
                        </p>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={historyImage3} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
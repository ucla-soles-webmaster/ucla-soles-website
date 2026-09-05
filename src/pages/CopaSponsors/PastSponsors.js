import React from 'react';
import HP from '../../Photos/CopaDelSol/sponsor_icons/hp_logo.png';
import SHPE from '../../Photos/CopaDelSol/sponsor_icons/shpe_region_2_logo.png';
import UCSB from '../../Photos/CopaDelSol/sponsor_icons/ucsb_logo.png';
import SOLES from '../../Photos/CopaDelSol/sponsor_icons/soles_logo.png';

const PastSponsors = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Sponsors</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 20px auto'}} />
                <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto', padding: '0 20px'}}>
                    <h2 style={{fontSize: 'clamp(18px, 2vw, 28px)', color: '#2E86AB', margin: '0 0 16px 0', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        Tournament Sponsors
                    </h2>
                    <p style={{color: '#666', fontSize: 'clamp(14px, 1.2vw, 20px)', fontWeight: '400', fontFamily: 'Inter, sans-serif', margin: 0}}>
                        Thank you to all our supporters who make this tournament possible!
                    </p>
                </div>
            </div>
            <div className="copa-content">
                {/* 2026 Sponsors */}
                <div style={{margin: '40px 0', backgroundColor: '#f0f8ff', padding: '30px', borderRadius: '15px'}}>
                    <h2 style={{textAlign: 'center', fontSize: '2.5vw', color: '#2E86AB', marginBottom: '30px'}}>2026 Sponsors</h2>
                    
                    <div className="sponsor-grid">
                        <a href="https://www.hp.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={HP} alt="HP" className="sponsor-logo" />
                        </a>
                        <a href="https://uclasoles.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={SOLES} alt="UCLA SOLES" className="sponsor-logo" />
                        </a>
                        <a href="https://shpe.org/region-2/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={SHPE} alt="SHPE Region 2" className="sponsor-logo" />
                        </a>
                    </div>
                </div>

                {/* 2025 Sponsors */}
                <div style={{margin: '40px 0', backgroundColor: '#f0f8ff', padding: '30px', borderRadius: '15px'}}>
                    <h2 style={{textAlign: 'center', fontSize: '2.5vw', color: '#2E86AB', marginBottom: '30px'}}>2025 Sponsors</h2>
                    
                    <div className="sponsor-grid">
                        <a href="https://www.hp.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={HP} alt="HP" className="sponsor-logo" />
                        </a>
                        <a href="https://www.losingenierosucsb.org/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={UCSB} alt="UCSB Los Ingenieros" className="sponsor-logo" />
                        </a>
                        <a href="https://shpe.org/region-2/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={SHPE} alt="SHPE Region 2" className="sponsor-logo" />
                        </a>
                    </div>
                </div>

                {/* 2024 Sponsors */}
                <div style={{margin: '40px 0', backgroundColor: '#f0f8ff', padding: '30px', borderRadius: '15px'}}>
                    <h2 style={{textAlign: 'center', fontSize: '2.5vw', color: '#2E86AB', marginBottom: '30px'}}>2024 Sponsors</h2>
                    
                    <div className="sponsor-grid">
                        <a href="https://www.hp.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={HP} alt="HP" className="sponsor-logo" />
                        </a>
                        <a href="https://uclasoles.com" target="_blank" rel="noopener noreferrer" className="sponsor-link">
                            <img src={SOLES} alt="UCLA SOLES" className="sponsor-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastSponsors;
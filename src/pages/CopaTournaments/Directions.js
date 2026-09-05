import React from 'react';
import parkingLot7 from '../../Photos/CopaDelSol/photo_gallery/Parking_Lot_7_instructions.png';
import parkingLot8 from '../../Photos/CopaDelSol/photo_gallery/Parking_Lot_8_instructions.png';
import imInstructionsP7 from '../../Photos/CopaDelSol/photo_gallery/IM_instructions_P7.png';
import imInstructionsP8 from '../../Photos/CopaDelSol/photo_gallery/IM_instructions_P8.png';
import bathroomTennisCourts from '../../Photos/CopaDelSol/photo_gallery/bathroom_instructions_tennis_courts.png';
import bathroomAckerman from '../../Photos/CopaDelSol/photo_gallery/bathroom_instructions_ackerman.png';

const Directions = () => {
    const containerStyle = {
        display: 'flex',
        gap: '20px',
        marginBottom: '32px',
        flexDirection: 'row'
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
        containerStyle.flexDirection = 'column';
    }

    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Directions</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px'}}>
                <div style={containerStyle}>
                    <div style={{flex: '1', backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0 0 12px 0', fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            Copa del Sol will be held at the <strong style={{fontWeight: '700'}}>UCLA Intramural Fields</strong>.
                        </p>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0 0 8px 0', fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            Please park in one of the following parking lots:
                        </p>
                        <ul style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0 0 12px 0', fontWeight: '400', fontFamily: 'Inter, sans-serif', paddingLeft: '20px'}}>
                            <li>UCLA Parking Lot 7</li>
                            <li>UCLA Parking Lot 8</li>
                        </ul>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0 0 12px 0', fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            Full-day parking is <strong style={{fontWeight: '700'}}>$17</strong>
                        </p>
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0', fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                            See the direction maps for further instructions, or find the locations on Google Maps.
                        </p>
                    </div>
                    
                    <div style={{flex: '1', backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <h3 style={{fontSize: 'clamp(20px, 1.5vw, 26px)', lineHeight: '1.4', textAlign: 'center', margin: '0 0 24px 0', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                            Get Directions
                        </h3>
                        <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
                            <a href="https://maps.app.goo.gl/uFdoPtRo6os6R2R66" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <button style={{
                                    backgroundColor: '#2E86AB',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontSize: 'clamp(16px, 1.1vw, 20px)',
                                    fontWeight: '600',
                                    fontFamily: 'Inter, sans-serif',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 20px rgba(46, 134, 171, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    UCLA Intramural Fields
                                </button>
                            </a>
                            <a href="https://maps.app.goo.gl/6yU9j1DWMUWPf15y5" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <button style={{
                                    backgroundColor: '#2E86AB',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontSize: 'clamp(16px, 1.1vw, 20px)',
                                    fontWeight: '600',
                                    fontFamily: 'Inter, sans-serif',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 20px rgba(46, 134, 171, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    UCLA Parking Lot 7
                                </button>
                            </a>
                            <a href="https://maps.app.goo.gl/VJJiaohZj5pw6pYT9" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <button style={{
                                    backgroundColor: '#2E86AB',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontSize: 'clamp(16px, 1.1vw, 20px)',
                                    fontWeight: '600',
                                    fontFamily: 'Inter, sans-serif',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 20px rgba(46, 134, 171, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    UCLA Parking Lot 8
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e0e0e0', marginBottom: '32px'}}>
                    <h3 style={{fontSize: 'clamp(20px, 1.5vw, 26px)', lineHeight: '1.4', textAlign: 'center', margin: '0 0 24px 0', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        Parking Directions
                    </h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '16px'}}>
                        <div>
                            <h4 style={{fontSize: 'clamp(18px, 1.3vw, 22px)', fontWeight: '600', color: '#2E86AB', textAlign: 'center', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>Parking Lot 7</h4>
                            <img src={parkingLot7} alt="Parking Lot 7 Instructions" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'}} />
                        </div>
                        <div>
                            <h4 style={{fontSize: 'clamp(18px, 1.3vw, 22px)', fontWeight: '600', color: '#2E86AB', textAlign: 'center', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>Parking Lot 8</h4>
                            <img src={parkingLot8} alt="Parking Lot 8 Instructions" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'}} />
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e0e0e0', marginBottom: '32px'}}>
                    <h3 style={{fontSize: 'clamp(20px, 1.5vw, 26px)', lineHeight: '1.4', textAlign: 'center', margin: '0 0 24px 0', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        UCLA Intramural Sports Field Directions
                    </h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '16px'}}>
                        <div>
                            <h4 style={{fontSize: 'clamp(18px, 1.3vw, 22px)', fontWeight: '600', color: '#2E86AB', textAlign: 'center', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>Parking Lot 7</h4>
                            <img src={imInstructionsP7} alt="IM Field Instructions from Parking Lot 7" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'}} />
                        </div>
                        <div>
                            <h4 style={{fontSize: 'clamp(18px, 1.3vw, 22px)', fontWeight: '600', color: '#2E86AB', textAlign: 'center', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>Parking Lot 8</h4>
                            <img src={imInstructionsP8} alt="IM Field Instructions from Parking Lot 8" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'}} />
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e0e0e0', marginBottom: '80px'}}>
                    <h3 style={{fontSize: 'clamp(20px, 1.5vw, 26px)', lineHeight: '1.4', textAlign: 'center', margin: '0 0 24px 0', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        Bathroom Directions
                    </h3>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '16px'}}>
                        <div>
                            <h4 style={{fontSize: 'clamp(18px, 1.3vw, 22px)', fontWeight: '600', color: '#2E86AB', textAlign: 'center', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>Tennis Courts Bathroom</h4>
                            <ul style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0 0 16px 0', fontWeight: '400', fontFamily: 'Inter, sans-serif', paddingLeft: '20px', color: '#333'}}>
                                <li>When exiting the IM Field, head right on the walkway, going up the hill.</li>
                                <li>Find the LA Tennis Center entrance near the top of the hill, to your left.</li>
                                <li>Enter the LA Tennis Center through this North entrance.</li>
                                <li>Turn right at the stadium walkway.</li>
                                <li>Find the restrooms to your right.</li>
                            </ul>
                            <img src={bathroomTennisCourts} alt="Tennis Courts Bathroom Instructions" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'}} />
                        </div>
                        <div>
                            <h4 style={{fontSize: 'clamp(18px, 1.3vw, 22px)', fontWeight: '600', color: '#2E86AB', textAlign: 'center', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>Ackerman Center Bathroom</h4>
                            <ul style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', margin: '0 0 16px 0', fontWeight: '400', fontFamily: 'Inter, sans-serif', paddingLeft: '20px', color: '#333'}}>
                                <li>When exiting the IM Field, head left on Bruin Walk.</li>
                                <li>Find the UCLA Ackerman Center to your right, across the walkway from the Bruin Statue.</li>
                                <li>Take the stairs outside (on the near side) of the Ackerman Center.</li>
                                <li>Enter the UCLA Ackerman Center through the Northwest entrance, at the top of the stairs.</li>
                                <li>Turn left, then make another left at the end of the first hall.</li>
                                <li>Find the restrooms to your left.</li>
                            </ul>
                            <img src={bathroomAckerman} alt="Ackerman Center Bathroom Instructions" style={{width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e5e7eb'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Directions;
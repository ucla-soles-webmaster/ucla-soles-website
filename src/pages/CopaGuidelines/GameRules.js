import React from 'react';
import rulesImage1 from '../../Photos/CopaDelSol/photo_gallery/ref_table.jpg';
import rulesImage2 from '../../Photos/CopaDelSol/photo_gallery/11 action 1.JPG';
import rulesImage3 from '../../Photos/CopaDelSol/photo_gallery/10 Action 4.JPG';
import rulesImage4 from '../../Photos/CopaDelSol/photo_gallery/attack.JPG';
import rulesImage5 from '../../Photos/CopaDelSol/photo_gallery/7 Male Golden Boot-Ball Trophies.JPG';
import rulesImage6 from '../../Photos/CopaDelSol/photo_gallery/DSCN2477.JPG';

const GameRules = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Game Rules</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px'}}>
                {/* Official Rules & Waivers */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Official Rules & Waivers</h3>
                        <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', margin: '0 0 12px 0', fontFamily: 'Inter, sans-serif'}}>
                            Official Soccer Rules: <a href="https://recreation.ucsb.edu/sites/default/files/2020-01/intramural-outdoor-soccer.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <button style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: 'clamp(12px, 1vw, 14px)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    marginLeft: '8px'
                                }}>
                                    View IM Soccer Rules PDF
                                </button>
                            </a>
                        </p>
                        <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', margin: 0, fontFamily: 'Inter, sans-serif'}}>
                            Required Waiver: <a href="https://drive.google.com/file/d/1oVIq5yhBdM_A4ZXP99HEjjLZERqIZy7M/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <button style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: 'clamp(12px, 1vw, 14px)',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    marginLeft: '8px'
                                }}>
                                    View Waiver
                                </button>
                            </a>
                        </p>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={rulesImage1} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>

                {/* Game Format */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 0}}>
                        <img src={rulesImage2} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                    <div style={{flex: 1, backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 1}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Game Format</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Co-ed 7v7 with minimum 2 female players on field</li>
                            <li style={{marginBottom: '6px'}}>Two 20-minute halves with continuous clock</li>
                            <li style={{marginBottom: '6px'}}>5-minute halftime break</li>
                            <li style={{marginBottom: '6px'}}>No overtime for regular games (ties reported as such)</li>
                            <li>Finals: 5-10 minute sudden death overtime, then shootout if needed</li>
                        </ul>
                    </div>
                </div>

                {/* Cards */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Cards</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Red card: Player sits out rest of game, no substitution allowed</li>
                            <li style={{marginBottom: '6px'}}>Two yellow cards = red card</li>
                            <li style={{marginBottom: '6px'}}>Two red cards in tournament = player eliminated</li>
                            <li>Field Marshall reserves right to adapt rules as needed</li>
                        </ul>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={rulesImage3} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>

                {/* Scoring System */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 0}}>
                        <img src={rulesImage4} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                    <div style={{flex: 1, backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 1}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Scoring & Points</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Female-scored goals count as two</li>
                            <li style={{marginBottom: '6px'}}>5 points per win, 3 points for tie, 1 point for shutout</li>
                            <li style={{marginBottom: '6px'}}>Referee keeps official game score</li>
                            <li style={{marginBottom: '6px'}}>Teams track goals per player</li>
                            <li style={{marginBottom: '6px'}}>Tiebreaker: winner of head to head game, goal differentials, then penalty shootout</li>
                            <li>Top 2 teams play for championship</li>
                        </ul>
                    </div>
                </div>

                {/* Disputes */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Disputes & Officials</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Referees make official calls during games</li>
                            <li style={{marginBottom: '6px'}}>Respect referee decisions at all times</li>
                            <li style={{marginBottom: '6px'}}>Team captains direct disputes to Field Marshall at score table</li>
                            <li>SHPE Region 2 Field Marshall has final authority</li>
                        </ul>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={rulesImage5} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>

                {/* Other Rules */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 80px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 0}}>
                        <img src={rulesImage6} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                    <div style={{flex: 1, backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 1}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Other Rules</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>No slide tackles except goalie in penalty area</li>
                            <li style={{marginBottom: '6px'}}>No direct free kicks, all indirect</li>
                            <li style={{marginBottom: '6px'}}>Penalty Kicks discretion of referee if box is not clearly defined</li>
                            <li style={{marginBottom: '6px'}}>Goalie may not punt or drop kick the ball over the halfway line</li>
                            <li>No metal or American football/baseball cleats</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameRules;
import React from 'react';
import guidelinesImage1 from '../../Photos/CopaDelSol/photo_gallery/9 Registratin Table.jpg';
import guidelinesImage2 from '../../Photos/CopaDelSol/photo_gallery/8 UCLA winning team.jpg';

const GameGuidelines = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Game Guidelines</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                {/* Sportsmanship */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 0}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Sportsmanship & Respect</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Be respectful at all times to other players, referees and game observers</li>
                            <li style={{marginBottom: '6px'}}>Remember we are all representing SHPE</li>
                            <li style={{marginBottom: '6px'}}>Teams should shake hands after each game</li>
                            <li>Maintain positive attitude and good sportsmanship throughout</li>
                        </ul>
                    </div>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 1}}>
                        <img src={guidelinesImage1} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                </div>

                {/* Equipment & Preparation */}
                <div style={{display: 'flex', alignItems: 'center', margin: '0 0 32px 0', gap: '32px', flexDirection: window.innerWidth <= 768 ? 'column' : 'row'}}>
                    <div style={{flex: 1, order: window.innerWidth <= 768 ? 1 : 0}}>
                        <img src={guidelinesImage2} alt="Copa del Sol" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'}} />
                    </div>
                    <div style={{flex: 1, backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', order: window.innerWidth <= 768 ? 0 : 1}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Equipment & Preparation</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Pennies will be provided and must be worn by one team</li>
                            <li style={{marginBottom: '6px'}}>Game balls (size 5) provided by the hosting chapter - at least 3 balls per field</li>
                            <li style={{marginBottom: '6px'}}>Recommended: Bring your own ball(s) for warm-up</li>
                            <li style={{marginBottom: '6px'}}>Bring water and shade for your team</li>
                            <li style={{marginBottom: '6px'}}>Shoes are required for all players</li>
                            <li style={{marginBottom: '6px'}}>See official rules for soccer cleat guidelines</li>
                            <li>Lunch will be provided but we recommend bringing your own snacks/food, especially if you have dietary restrictions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameGuidelines;
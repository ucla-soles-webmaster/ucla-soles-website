import React from 'react';

const EmailContacts = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Email Contacts</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 20px auto'}} />
                <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto', padding: '0 20px'}}>
                    <h2 style={{fontSize: 'clamp(18px, 2vw, 28px)', color: '#2E86AB', margin: '0 0 16px 0', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        Direct Contact Information
                    </h2>
                    <p style={{color: '#666', fontSize: 'clamp(14px, 1.2vw, 20px)', fontWeight: '400', fontFamily: 'Inter, sans-serif', margin: '0 0 40px 0'}}>
                        Reach out to our Copa del Sol team directly using the contact information below.
                    </p>
                    
                    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                        <a href="mailto:shpe.r2.copadelsol@gmail.com" style={{textDecoration: 'none'}}>
                            <button style={{
                                backgroundColor: '#2E86AB',
                                color: 'white',
                                border: 'none',
                                padding: '16px 32px',
                                borderRadius: '8px',
                                fontSize: 'clamp(14px, 1.2vw, 18px)',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                minWidth: '300px'
                            }}>
                                SHPE Region 2 Copa del Sol<br/>
                                <span style={{fontWeight: '400', fontSize: '0.9em'}}>shpe.r2.copadelsol@gmail.com</span>
                            </button>
                        </a>
                        
                        <a href="mailto:uclasoles.president@gmail.com" style={{textDecoration: 'none'}}>
                            <button style={{
                                backgroundColor: '#FF8C42',
                                color: 'white',
                                border: 'none',
                                padding: '16px 32px',
                                borderRadius: '8px',
                                fontSize: 'clamp(14px, 1.2vw, 18px)',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                minWidth: '300px'
                            }}>
                                UCLA SHPE President<br/>
                                <span style={{fontWeight: '400', fontSize: '0.9em'}}>uclasoles.president@gmail.com</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailContacts;
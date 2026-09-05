import React from 'react';

const Donate = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>How to Donate</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{marginBottom: '32px', backgroundColor: '#2E86AB', padding: '32px', borderRadius: '12px', color: 'white', boxShadow: '0 4px 20px rgba(46, 134, 171, 0.2)'}}>
                    <h2 style={{fontSize: 'clamp(20px, 2.5vw, 32px)', color: 'white', marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontWeight: '600', textAlign: 'center'}}>We Love Our Sponsors!</h2>
                    <p style={{fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: '1.6', margin: 0, fontFamily: 'Inter, sans-serif', textAlign: 'justify'}}>
                        Copa del Sol relies on the generous support of its SHPE industry partners and community sponsors to help ensure Hispanics are prepared to lead globally. Through monetary donations, supplies, volunteers, and company merchandise, our sponsors make it possible to host a successful tournament that unites SHPE members from across Region 2. Because of your support, SHPE can continue advancing its mission and empowering the next generation of leaders.
                    </p>
                </div>

                <div style={{marginBottom: '32px', backgroundColor: 'white', padding: '32px', borderRadius: '12px', border: '2px solid #2E86AB', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'}}>
                    <p style={{fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: '1.6', margin: '0 0 16px 0', fontFamily: 'Inter, sans-serif', color: '#374151', textAlign: 'center', fontWeight: '500'}}>
                        SHPE is a 501(c)(3) non-profit organization.
                    </p>
                    <p style={{fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: '1.6', margin: 0, fontFamily: 'Inter, sans-serif', color: '#374151', textAlign: 'justify'}}>
                        Your donation provides valuable branding visibility and recognition through features on SHPE digital platforms, as well as shout-outs during the opening and closing ceremonies. Sponsors will also have the opportunity to interact with participants in a fun, team-oriented environment, with potential logo placement on tournament shirts, banners, and promotional flyers. Thank you for making a difference for the SHPE Familia!
                    </p>
                </div>

                <div style={{backgroundColor: '#f9fafb', padding: '32px', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '32px'}}>
                    <h2 style={{fontSize: 'clamp(20px, 2.5vw, 32px)', color: '#2E86AB', marginBottom: '24px', fontFamily: 'Inter, sans-serif', fontWeight: '600', textAlign: 'center'}}>How to Donate</h2>
                    <p style={{fontSize: 'clamp(14px, 1.2vw, 18px)', color: '#374151', marginBottom: '16px', fontFamily: 'Inter, sans-serif'}}>If you would like to become a sponsor, do <strong>both</strong> of the following:</p>
                    <ol style={{fontSize: 'clamp(14px, 1.2vw, 18px)', color: '#374151', lineHeight: '1.6', fontFamily: 'Inter, sans-serif', paddingLeft: '20px'}}>
                        <li style={{marginBottom: '8px'}}>Send an email to the UCLA SHPE President: <a href="mailto:uclasoles.president@gmail.com" style={{color: '#2E86AB', textDecoration: 'underline'}}>uclasoles.president@gmail.com</a>, and CC: <a href="mailto:shpe.r2.copadelsol@gmail.com" style={{color: '#2E86AB', textDecoration: 'underline'}}>shpe.r2.copadelsol@gmail.com</a></li>
                        <li>Submit a <a href="https://forms.gle/SFT1My6K6f43gLZa8" target="_blank" rel="noopener noreferrer" style={{color: '#2E86AB', textDecoration: 'underline'}}>Donation Form</a></li>
                    </ol>
                </div>

                <div style={{textAlign: 'center'}}>
                    <a href="https://forms.gle/SFT1My6K6f43gLZa8" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <button style={{
                            backgroundColor: '#FF8C42',
                            color: 'white',
                            border: 'none',
                            padding: '20px 40px',
                            borderRadius: '12px',
                            fontSize: 'clamp(16px, 1.3vw, 20px)',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 20px rgba(255, 140, 66, 0.3)',
                            transition: 'all 0.3s ease'
                        }}>
                            Donation Form
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Donate;
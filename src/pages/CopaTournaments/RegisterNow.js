import React from 'react';

const RegisterNow = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Tournament Information</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '900px', margin: '0 auto', padding: '0 20px'}}>
                <div style={{backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', marginBottom: '24px'}}>
                    <p style={{fontSize: 'clamp(18px, 1.3vw, 24px)', lineHeight: '1.6', textAlign: 'center', margin: 0, fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        The 2nd annual SHPE R2 Copa del Sol soccer tournament has concluded. Thank you to all participants!
                    </p>
                </div>
                
                <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e0e0e0', marginBottom: '24px'}}>
                    <p style={{fontSize: 'clamp(16px, 1.1vw, 20px)', lineHeight: '1.6', color: '#2E86AB', margin: '0 0 20px 0', fontWeight: '500', fontFamily: 'Inter, sans-serif'}}>
                        <strong>Date:</strong> April 2025 (Completed)<br/>
                        <strong>Time:</strong> 8 am - 5 pm<br/>
                        <strong>Location:</strong> UCLA
                    </p>
                    <div style={{textAlign: 'center'}}>
                        <button style={{
                            backgroundColor: '#cccccc',
                            color: '#666666',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: 'clamp(16px, 1.1vw, 20px)',
                            fontWeight: '600',
                            fontFamily: 'Inter, sans-serif',
                            cursor: 'not-allowed',
                            boxShadow: 'none',
                            transition: 'all 0.3s ease'
                        }} disabled>
                            Registration Closed
                        </button>
                        <p style={{fontSize: 'clamp(14px, 1vw, 16px)', color: '#666666', marginTop: '8px', fontFamily: 'Inter, sans-serif'}}>
                            This year's Copa del Sol has passed! Information about Copa 2027 will be posted in Fall 2026.
                        </p>
                    </div>
                </div>

                <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid #e0e0e0', marginBottom: '24px'}}>
                    <h3 style={{fontSize: 'clamp(20px, 1.5vw, 26px)', lineHeight: '1.4', textAlign: 'center', margin: '0 0 16px 0', fontWeight: '700', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        Roster and Waivers
                    </h3>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', margin: '0 0 16px 0', fontWeight: '500', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        The primary and secondary contact for each team can access the <strong>Team Registration Google Drive</strong>. A folder for each registered team can be found here. Each team folder contains the Team Roster spreadsheet and an unsigned copy of the SHPE Region 2 Player Waiver. 
                    </p>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', margin: '0 0 16px 0', fontWeight: '500', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        Each team's primary contact is responsible for listing all players on their Team Roster spreadsheet.
                    </p>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', margin: '0 0 20px 0', fontWeight: '500', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        Each team's primary contact is responsible for uploading each of their player's signed SHPE waiver form to their team's folder in the Team Registration Drive.
                    </p>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', margin: '0 0 20px 0', fontWeight: '500', fontFamily: 'Inter, sans-serif', color: '#2E86AB'}}>
                        Please read the full instructions, which can be found in the "Instructions" file within each team folder.
                    </p>
                    <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <button style={{
                            backgroundColor: '#cccccc',
                            color: '#666666',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: 'clamp(16px, 1.1vw, 20px)',
                            fontWeight: '600',
                            fontFamily: 'Inter, sans-serif',
                            cursor: 'not-allowed',
                            boxShadow: 'none',
                            transition: 'all 0.3s ease'
                        }} disabled>
                            Team Registration Drive
                        </button>
                        <p style={{fontSize: 'clamp(14px, 1vw, 16px)', color: '#666666', marginTop: '8px', fontFamily: 'Inter, sans-serif', textAlign: 'center', width: '100%'}}>
                            Access to the Copa 2026 Team Registration folder has closed.
                        </p>
                    </div>
                </div>

                <div style={{backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', marginBottom: '24px'}}>
                    <h3 style={{fontSize: 'clamp(20px, 1.5vw, 26px)', lineHeight: '1.4', textAlign: 'center', margin: '0 0 16px 0', fontWeight: '700', fontFamily: 'Inter, sans-serif'}}>
                        Exciting News
                    </h3>
                    <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: '1.6', textAlign: 'center', margin: '0 0 12px 0', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        A SHPE World Cup is currently being discussed for 2026.
                    </p>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'center', margin: 0, fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                        Teams competing in the 3rd annual SHPE R2 Copa del Sol may have the opportunity to qualify for this national event — more details coming soon!
                    </p>
                </div>
                
                <div style={{backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', marginBottom: '24px'}}>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', margin: 0, fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                        This is one of the largest and fastest growing SHPE regional gatherings in the country that gives chapters the opportunity to showcase their soccer talent and build connections with other SHPE chapters. Students will have the opportunity to network with professionals who will also be there to compete for the prestigious Copa del Sol Trophy. The winning team earns bragging rights and gets to keep the Copa del Sol Trophy for the year.
                    </p>
                </div>

                <div style={{backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white', marginBottom: '24px'}}>
                    <p style={{fontSize: 'clamp(16px, 1.2vw, 22px)', lineHeight: '1.6', textAlign: 'center', margin: '0 0 16px 0', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        But wait there is more!!!
                    </p>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', margin: 0, fontWeight: '400', fontFamily: 'Inter, sans-serif'}}>
                        Golden boot and golden ball trophies will be awarded to the best two female and best two male players. And come cheer for your favorite player in the classic SHPETina showcase that will be played near the end of the tournament.
                    </p>
                </div>

                <div style={{backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white', marginBottom: '80px'}}>
                    <p style={{fontSize: 'clamp(14px, 1.1vw, 18px)', lineHeight: '1.6', textAlign: 'justify', color: 'white', margin: 0, fontWeight: '700', fontFamily: 'Inter, sans-serif'}}>
                        <strong style={{color: 'white'}}>NEW THIS YEAR</strong> for community college participants. College Information booths will be available near the fields so students and parents can stop by in between games to learn about college life and transfer experience. And don't miss the mini campus tour after the tournament for those interested in exploring the campus.<br/><br/>
                        <strong style={{color: 'white'}}>Coming soon!</strong> SHPE Junior will demonstrate their leadership and effective communication skills as Copa referees.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterNow;
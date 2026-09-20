import React from 'react';

const HostingEvent = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Hosting an Event</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
                    <div style={{backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Date Requirements</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Tournament should be held on one of the last two weekends of April</li>
                            <li style={{marginBottom: '6px'}}>Finalize fields and date before Christmas holidays</li>
                            <li>Early date confirmation maximizes chapter participation</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Location & Fields</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>All games must be played at the same location</li>
                            <li style={{marginBottom: '6px'}}>Fields reserved from 8am-5pm (preferably until 6pm)</li>
                            <li style={{marginBottom: '6px'}}>Minimum: 2 full soccer fields for 4 simultaneous games</li>
                            <li>Ideal: 3 full soccer fields for 6 games and more flexibility</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Required Equipment</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Goal nets: 8-12 (depending on number of fields)</li>
                            <li style={{marginBottom: '6px'}}>Corner posts: 16-24 (4 per field)</li>
                            <li style={{marginBottom: '6px'}}>Flat cones for field lines (if fields not lined)</li>
                            <li style={{marginBottom: '6px'}}>Pennies: 40-60 for team differentiation</li>
                            <li style={{marginBottom: '6px'}}>Game balls: 2-3 per game, plus ball pump</li>
                            <li>First Aid kit with ice packs</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Referees & Operations</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Hosting chapter provides volunteer referees</li>
                            <li style={{marginBottom: '6px'}}>Minimum: 1 referee per game, Ideal: 2 per game</li>
                            <li style={{marginBottom: '6px'}}>Help with game day registration</li>
                            <li>Prepare game schedules and keep score</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: '#2E86AB', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Food & Logistics</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>Provide food and drinks for ~160 participants</li>
                            <li style={{marginBottom: '6px'}}>SHPE R2 may help subsidize costs</li>
                            <li style={{marginBottom: '6px'}}>Optional: Parking, gas, and lodging assistance</li>
                            <li>Teams encouraged to bring own water and snacks</li>
                        </ul>
                    </div>

                    <div style={{backgroundColor: '#FF8C42', padding: '24px', borderRadius: '12px', color: 'white'}}>
                        <h3 style={{margin: '0 0 16px 0', fontSize: 'clamp(18px, 1.4vw, 24px)', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>Tournament Details</h3>
                        <ul style={{fontSize: 'clamp(12px, 1vw, 16px)', lineHeight: '1.6', margin: 0, paddingLeft: '20px', fontFamily: 'Inter, sans-serif'}}>
                            <li style={{marginBottom: '6px'}}>COED 7v7 format</li>
                            <li style={{marginBottom: '6px'}}>Chapters can form multiple teams</li>
                            <li style={{marginBottom: '6px'}}>Alumni can play or form their own teams</li>
                            <li style={{marginBottom: '6px'}}>SHPEtinas Showcase Match for female representation</li>
                            <li>Awards: 3D World Cup Trophy replica, Golden Boot, Gold Ball</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostingEvent;
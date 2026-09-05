import React from 'react';

const History = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Tournament History</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div className="copa-content">
                <div className="copa-section">
                    <div className="copa-section-header">
                        <h2>SHPE R2 Copa del Sol Finals</h2>
                    </div>
                    <div className="copa-section-content">
                        <div style={{overflowX: 'auto'}}>
                            <table className="copa-table">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Winner</th>
                                        <th style={{textAlign: 'center'}} colSpan="2">Score</th>
                                        <th>Runner-Up</th>
                                        <th>Host</th>
                                        <th>Venue</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{fontWeight: '500'}}>2026</td>
                                        <td style={{fontWeight: '600', color: '#2E86AB'}}>UCLA SOLES</td>
                                        <td style={{textAlign: 'center', fontWeight: '600'}}>4</td>
                                        <td style={{textAlign: 'center', fontWeight: '600'}}>3</td>
                                        <td style={{fontWeight: '600'}}>Oxnard</td>
                                        <td>UCLA</td>
                                        <td>Turf</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: '500'}}>2025</td>
                                        <td style={{fontWeight: '600', color: '#2E86AB'}}>UCLA SOLES</td>
                                        <td style={{textAlign: 'center', fontWeight: '600'}}>2</td>
                                        <td style={{textAlign: 'center', fontWeight: '600'}}>1</td>
                                        <td style={{fontWeight: '600'}}>Oxnard</td>
                                        <td>UCSB</td>
                                        <td>Grass</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight: '500'}}>2024</td>
                                        <td style={{fontWeight: '600', color: '#2E86AB'}}>UCSB Los Ingenieros</td>
                                        <td style={{textAlign: 'center', fontWeight: '600'}}>5</td>
                                        <td style={{textAlign: 'center', fontWeight: '600'}}>3</td>
                                        <td style={{fontWeight: '600'}}>UCLA SOLES</td>
                                        <td>UCLA</td>
                                        <td>Beach</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="copa-section">
                    <div className="copa-section-header">
                        <h2>SHPE R2 Copa del Sol Awards</h2>
                    </div>
                    <div className="copa-section-content">
                        {/* 2026 Awards */}
                        <div style={{marginBottom: '40px'}}>
                            <h3 style={{fontSize: 'clamp(18px, 1.8vw, 24px)', color: '#2E86AB', textAlign: 'center', marginBottom: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>2026 Awards</h3>
                            <div style={{overflowX: 'auto'}}>
                                <table className="copa-table">
                                    <thead>
                                        <tr>
                                            <th>Award</th>
                                            <th>Name</th>
                                            <th>School</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Male Golden Boot</td>
                                            <td>Jimmy Bermudez</td>
                                            <td>UCLA SOLES</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Male Golden Ball</td>
                                            <td>Rosalio Dominquez</td>
                                            <td>UCSB</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Female Golden Boot</td>
                                            <td>Sabrina Bluml</td>
                                            <td>USC</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Female Golden Ball</td>
                                            <td>Julissa Cesareo</td>
                                            <td>UCSB</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 2025 Awards */}
                        <div style={{marginBottom: '40px'}}>
                            <h3 style={{fontSize: 'clamp(18px, 1.8vw, 24px)', color: '#2E86AB', textAlign: 'center', marginBottom: '20px', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>2025 Awards</h3>
                            <div style={{overflowX: 'auto'}}>
                                <table className="copa-table">
                                    <thead>
                                        <tr>
                                            <th>Award</th>
                                            <th>Name</th>
                                            <th>School</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Female Golden Boot</td>
                                            <td>Alina Garcia</td>
                                            <td>SD Southwestern College</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Female Golden Ball</td>
                                            <td>Kassandra Garcia</td>
                                            <td>SD Southwestern College</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Male Golden Boot</td>
                                            <td>Jimmy Bermudez</td>
                                            <td>UCLA SOLES</td>
                                        </tr>
                                        <tr>
                                            <td style={{fontWeight: '500'}}>Male Golden Ball</td>
                                            <td>Rosalío Domínguez</td>
                                            <td>UCSB Los Ingenieros</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom: '80px'}}></div>
        </div>
    );
};

export default History;
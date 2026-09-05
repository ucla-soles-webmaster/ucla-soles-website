import React from 'react';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';

// Team logos imports
import ucsbLogo from '../../Photos/CopaDelSol/team_icons/ucsb_logo.png';
import uclaLogo from '../../Photos/CopaDelSol/team_icons/ucla_logo.jpg';
import calPolyLogo from '../../Photos/CopaDelSol/team_icons/cal_poly_slo_logo.jpg';
import sbccLogo from '../../Photos/CopaDelSol/team_icons/sb_city_college_logo.jpg';
import csunLogo from '../../Photos/CopaDelSol/team_icons/csun_logo.png';
import pasadenaLogo from '../../Photos/CopaDelSol/team_icons/pasadena_college_logo.png';
import lmuLogo from '../../Photos/CopaDelSol/team_icons/lmu_logo.jpg';
import oxnardLogo from '../../Photos/CopaDelSol/team_icons/oxnard_college_logo.png';
import sdSouthwesternLogo from '../../Photos/CopaDelSol/team_icons/southwestern_college_logo.png';
import sdMesaLogo from '../../Photos/CopaDelSol/team_icons/sd_mesa_college_logo.jpg';
import shpeRegion2Logo from '../../Photos/CopaDelSol/team_icons/shpe_region_2_logo.png';
import uscLogo from '../../Photos/CopaDelSol/team_icons/usc_logo.png';
import csulbLogo from '../../Photos/CopaDelSol/team_icons/csulb_logo.png';
import ucsdLogo from '../../Photos/CopaDelSol/team_icons/ucsd_logo.png';
import laMissionLogo from '../../Photos/CopaDelSol/team_icons/la_mission_logo.png';
import venturaLogo from '../../Photos/CopaDelSol/team_icons/ventura_college_logo.png';
import sanDiegoCityLogo from '../../Photos/CopaDelSol/team_icons/san_diego_city_college_logo.jpg';
import elCaminoLogo from '../../Photos/CopaDelSol/team_icons/el_camino_college_logo.jpg';
import cerritosLogo from '../../Photos/CopaDelSol/team_icons/cerritos_college_logo.jpg';

// Team data with logos and websites
const teams2026 = [
    { name: 'UCLA', logo: uclaLogo, website: 'https://www.ucla.edu' },
    { name: 'Oxnard College', logo: oxnardLogo, website: 'https://www.oxnardcollege.edu' },
    { name: 'UCSB', logo: ucsbLogo, website: 'https://www.ucsb.edu' },
    { name: 'USC', logo: uscLogo, website: 'https://www.usc.edu' },
    { name: 'UCSD', logo: ucsdLogo, website: 'https://www.ucsd.edu' },
    { name: 'CSULB', logo: csulbLogo, website: 'https://www.csulb.edu' },
    { name: 'LMU', logo: lmuLogo, website: 'https://www.lmu.edu' },
    { name: 'CSUN', logo: csunLogo, website: 'https://www.csun.edu' },
    { name: 'Southwestern College', logo: sdSouthwesternLogo, website: 'https://www.swccd.edu' },
    { name: 'LA Mission College', logo: laMissionLogo, website: 'https://www.lamission.edu' },
    { name: 'Pasadena City College', logo: pasadenaLogo, website: 'https://www.pasadena.edu' },
    { name: 'Ventura College', logo: venturaLogo, website: 'https://www.venturacollege.edu' },
    { name: 'San Diego City College', logo: sanDiegoCityLogo, website: 'https://www.sdccd.edu' },
    { name: 'El Camino College', logo: elCaminoLogo, website: 'https://www.elcamino.edu' },
    { name: 'Cerritos College', logo: cerritosLogo, website: 'https://www.cerritos.edu' }
];

const teams2025 = [
    { name: 'UCSB', logo: ucsbLogo, website: 'https://www.ucsb.edu' },
    { name: 'UCLA', logo: uclaLogo, website: 'https://www.ucla.edu' },
    { name: 'Cal Poly SLO', logo: calPolyLogo, website: 'https://www.calpoly.edu' },
    { name: 'SB City College', logo: sbccLogo, website: 'https://www.sbcc.edu' },
    { name: 'CSUN', logo: csunLogo, website: 'https://www.csun.edu' },
    { name: 'Pasadena College', logo: pasadenaLogo, website: 'https://www.pasadena.edu' },
    { name: 'LMU', logo: lmuLogo, website: 'https://www.lmu.edu' },
    { name: 'Oxnard College', logo: oxnardLogo, website: 'https://www.oxnardcollege.edu' },
    { name: 'SD Southwestern College', logo: sdSouthwesternLogo, website: 'https://www.swccd.edu' },
    { name: 'SD MESA College', logo: sdMesaLogo, website: 'https://www.sdmesa.edu' },
    { name: 'Santa Barbara Professionals', logo: shpeRegion2Logo, website: '#' },
    { name: 'San Diego Professionals', logo: shpeRegion2Logo, website: '#' }
];

const teams2024 = [
    { name: 'UCLA', logo: uclaLogo, website: 'https://www.ucla.edu' },
    { name: 'UCSB', logo: ucsbLogo, website: 'https://www.ucsb.edu' },
    { name: 'SB City College', logo: sbccLogo, website: 'https://www.sbcc.edu' },
    { name: 'San Diego Professionals', logo: shpeRegion2Logo, website: '#' },
    { name: 'SD MESA College', logo: sdMesaLogo, website: 'https://www.sdmesa.edu' }
];

const PastTeams = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Past Teams</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                {/* 2026 Teams */}
                <div style={{marginBottom: '48px'}}>
                    <h2 style={{textAlign: 'center', fontSize: 'clamp(20px, 2.5vw, 32px)', color: '#2E86AB', marginBottom: '32px', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>2026 Participating Teams</h2>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', justifyItems: 'center'}}>
                        {teams2026.map((team, index) => (
                            <div key={index} style={{backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', textAlign: 'center', border: '2px solid #2E86AB', width: '180px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s ease'}}>
                                <a href={team.website} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                    <img src={team.logo} alt={team.name} style={{width: '140px', height: '100px', objectFit: 'contain', marginBottom: '12px', alignSelf: 'center'}} />
                                    <h4 style={{margin: '0', fontSize: 'clamp(12px, 1vw, 16px)', color: '#2E86AB', fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>{team.name}</h4>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2025 Teams */}
                <div style={{marginBottom: '48px'}}>
                    <h2 style={{textAlign: 'center', fontSize: 'clamp(20px, 2.5vw, 32px)', color: '#2E86AB', marginBottom: '32px', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>2025 Participating Teams</h2>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', justifyItems: 'center'}}>
                        {teams2025.map((team, index) => (
                            <div key={index} style={{backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', textAlign: 'center', border: '2px solid #2E86AB', width: '180px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s ease'}}>
                                <a href={team.website} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                    <img src={team.logo} alt={team.name} style={{width: '140px', height: '100px', objectFit: 'contain', marginBottom: '12px', alignSelf: 'center'}} />
                                    <h4 style={{margin: '0', fontSize: 'clamp(12px, 1vw, 16px)', color: '#2E86AB', fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>{team.name}</h4>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2024 Teams */}
                <div style={{marginBottom: '80px'}}>
                    <h2 style={{textAlign: 'center', fontSize: 'clamp(20px, 2.5vw, 32px)', color: '#2E86AB', marginBottom: '32px', fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>2024 Participating Teams</h2>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', justifyItems: 'center'}}>
                        {teams2024.map((team, index) => (
                            <div key={index} style={{backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', textAlign: 'center', border: '2px solid #2E86AB', width: '180px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s ease'}}>
                                <a href={team.website} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                    <img src={team.logo} alt={team.name} style={{width: '140px', height: '100px', objectFit: 'contain', marginBottom: '12px', alignSelf: 'center'}} />
                                    <h4 style={{margin: '0', fontSize: 'clamp(12px, 1vw, 16px)', color: '#2E86AB', fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>{team.name}</h4>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastTeams;
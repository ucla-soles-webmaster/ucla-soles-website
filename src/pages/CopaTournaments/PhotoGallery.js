import React, { useState } from 'react';

const PhotoGallery = () => {
    const [activeTab, setActiveTab] = useState('google');
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Photos</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 20px auto'}} />
                <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '0 20px'}}>
                    <h2 style={{fontSize: 'clamp(18px, 2vw, 28px)', color: '#2E86AB', margin: '0 0 16px 0', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                        Photo Gallery
                    </h2>
                    <p style={{color: '#FF8C42', fontSize: 'clamp(14px, 1.2vw, 20px)', fontWeight: '500', fontFamily: 'Inter, sans-serif', margin: '0 0 40px 0'}}>
                        Browse our Copa del Sol photo collection. If you took any photos you want to add, send them to: (insert email).
                    </p>
                </div>
            </div>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
                <div style={{textAlign: 'center', marginBottom: '24px'}}>
                    <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px'}}>
                        <a href="https://drive.google.com/drive/folders/1x0K6VPN1zIj36JWLxD51TMgIFcxfWaXc" target="_blank" rel="noopener noreferrer" 
                           style={{backgroundColor: '#2E86AB', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: 'clamp(14px, 1.1vw, 18px)', fontFamily: 'Inter, sans-serif', fontWeight: '500', boxShadow: '0 2px 8px rgba(46, 134, 171, 0.3)'}}>
                            Open Google Drive
                        </a>
                        <a href="https://app.box.com/s/yg1wnvpigocpwd1unukb6s2haxl5f24e" target="_blank" rel="noopener noreferrer" 
                           style={{backgroundColor: '#FF8C42', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: 'clamp(14px, 1.1vw, 18px)', fontFamily: 'Inter, sans-serif', fontWeight: '500', boxShadow: '0 2px 8px rgba(255, 140, 66, 0.3)'}}>
                            Open Box
                        </a>
                    </div>
                    <div style={{display: 'flex', gap: '2px', justifyContent: 'center', marginBottom: '16px', backgroundColor: '#f8f9fa', borderRadius: '12px', padding: '4px', maxWidth: '300px', margin: '0 auto'}}>
                        <button 
                            onClick={() => setActiveTab('google')}
                            style={{
                                backgroundColor: activeTab === 'google' ? '#2E86AB' : 'transparent',
                                color: activeTab === 'google' ? 'white' : '#666',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: 'clamp(14px, 1.1vw, 18px)',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                flex: 1,
                                boxShadow: activeTab === 'google' ? '0 2px 8px rgba(46, 134, 171, 0.3)' : 'none'
                            }}
                        >
                            Google Drive
                        </button>
                        <button 
                            onClick={() => setActiveTab('box')}
                            style={{
                                backgroundColor: activeTab === 'box' ? '#FF8C42' : 'transparent',
                                color: activeTab === 'box' ? 'white' : '#666',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: 'clamp(14px, 1.1vw, 18px)',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                flex: 1,
                                boxShadow: activeTab === 'box' ? '0 2px 8px rgba(255, 140, 66, 0.3)' : 'none'
                            }}
                        >
                            Box
                        </button>
                    </div>
                </div>
                <div style={{borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '80px'}}>
                    {activeTab === 'google' ? (
                        <iframe 
                            src="https://drive.google.com/embeddedfolderview?id=1x0K6VPN1zIj36JWLxD51TMgIFcxfWaXc#grid" 
                            width="100%" 
                            height="450" 
                            frameBorder="0"
                            title="Copa del Sol Photos - Google Drive"
                        ></iframe>
                    ) : (
                        <iframe 
                            src="https://app.box.com/embed/s/yg1wnvpigocpwd1unukb6s2haxl5f24e" 
                            width="100%" 
                            height="450" 
                            frameBorder="0"
                            title="Copa del Sol Photos - Box"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
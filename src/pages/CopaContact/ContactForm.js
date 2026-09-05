import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>Contact Form</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>
            <div style={{maxWidth: '600px', margin: '0 auto', padding: '0 20px 80px 20px', textAlign: 'center'}}>
                <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', color: '#2E86AB', marginBottom: '32px', fontWeight: '600', fontFamily: 'Inter, sans-serif'}}>
                    Have questions about Copa del Sol? <span style={{color: '#FF8C42'}}>Fill out our contact form.</span>
                </p>
                <a href="https://forms.gle/4in7LRmLogKVmGGcA" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                    <button style={{
                        backgroundColor: '#2E86AB',
                        color: 'white',
                        border: 'none',
                        padding: '20px 40px',
                        borderRadius: '12px',
                        fontSize: 'clamp(16px, 1.3vw, 20px)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(46, 134, 171, 0.3)',
                        transition: 'all 0.3s ease'
                    }}>
                        Contact Form
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ContactForm;
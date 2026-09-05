import React, { useState } from 'react';

const FAQs = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "Who can I contact if I have more questions that are not answered here?",
            answer: (
                <span>
                    Email UCLA SHPE President: <a href="mailto:uclasoles.president@gmail.com" style={{color: '#2E86AB', textDecoration: 'underline'}}>uclasoles.president@gmail.com</a> and CC: <a href="mailto:shpe.r2.copadelsol@gmail.com" style={{color: '#2E86AB', textDecoration: 'underline'}}>shpe.r2.copadelsol@gmail.com</a>
                </span>
            )
        },
        {
            question: "Do I have to pay for team registration?",
            answer: "No. There is currently no fee to register a team to play"
        },
        {
            question: "Do all players need to be paid SHPE members?",
            answer: "We strongly encourage all players to be paid SHPE members. SHPE membership is $10 per student. You can join or renew here: https://shpe.org/membership/become-a-member/.  Important: If Copa del Sol becomes an official qualifier for the SHPE World Cup, paid SHPE membership may become required for ALL players."
        },
        {
            question: "Can non-SHPE members play in the soccer tournament?",
            answer: "SHPE is an inclusive organization. Non-SHPE members may participate, but they should be actively involved with your chapter or participate in some SHPE activities. Each team is allowed a maximum of 2 non-SHPE members on the field at any time. However, if Copa del Sol becomes an official qualifier for the SHPE World Cup, paid SHPE membership may become required for all players."
        },
        {
            question: "Can former or current inter-collegiate soccer players participate in the tournament?",
            answer: "No. To ensure fairness for all participants, former or current inter-collegiate, semi-professional, or equivalent-level players are not permitted to play."
        },
        {
            question: "What is team size on the field?",
            answer: "Co-ed 7 total players with minimal 2 female players"
        },
        {
            question: "What if we don't have the minimum two female players on the field?",
            answer: "Your team size will be reduced to 6 players. If you have at least 1 or 2 female players, they must be playing the entire time. We want to avoid all male teams"
        },
        {
            question: "What is the smallest team size for a game?",
            answer: "A team can start and continue play with a total of 5 players"
        },
        {
            question: "Can SHPE alumni play with students?",
            answer: "Yes they can be part of the student team if they are former SHPE students"
        },
        {
            question: "Can SHPE Professionals bring a team to the tournament?",
            answer: "Yes we highly encourage SHPE professional chapters to participate"
        },
        {
            question: "Can SHPE professional play with the students?",
            answer: "Yes if the SHPE professional chapter does not have a team they can play with their student chapter"
        },
        {
            question: "What is the game field size?",
            answer: "All games will be played on one half of a regulation-size soccer field (~65 x 50 yards)."
        },
        {
            question: "Can SHPE Junior chapters (e.g. high school students) play?",
            answer: "No minors are allowed to play due to liability purposes."
        },
        {
            question: "Will lunch be provided?",
            answer: "We will be providing some food (e.g. pizza) and water. We encourage you to bring your own food if you have dietary restrictions"
        },
        {
            question: "Will lodging be provided?",
            answer: "No, but the hosting team will try to provide lodging in their homes. Priority will be given to those teams traveling the furthest and on a first come bases."
        },
        {
            question: "Will transportation be provided?",
            answer: "No. We encourage you to carpool or get transportation funding from your chapter or university. Other options are zipcar.com"
        },
        {
            question: "How late can I register?",
            answer: "You should register 2 weeks before the event or before it gets full. We will do our best to accommodate late registration but it is not guaranteed."
        },
        {
            question: "Will there be reimbursement for gas mileage?",
            answer: "This is to be determined based on funding availability."
        }
    ];

    return (
        <div>
            <div style={{padding: '40px 0'}}>
                <h1 style={{fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: '#2E86AB', textAlign: 'center', margin: '0 0 20px 0', fontFamily: 'Inter, sans-serif'}}>FAQs</h1>
                <hr style={{width: '80px', height: '4px', backgroundColor: '#FF8C42', border: 'none', margin: '0 auto 40px auto'}} />
            </div>

            <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 20px 80px 20px'}}>
                {faqs.map((faq, index) => (
                    <div key={index} style={{marginBottom: '15px', backgroundColor: index % 2 === 0 ? '#f0f8ff' : '#fff5f0', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            style={{
                                width: '100%',
                                padding: '20px',
                                backgroundColor: index % 2 === 0 ? '#2E86AB' : '#FF8C42',
                                color: 'white',
                                border: 'none',
                                textAlign: 'left',
                                fontSize: '1.2vw',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            {faq.question}
                            <span style={{fontSize: '1.5vw'}}>{openFAQ === index ? '−' : '+'}</span>
                        </button>
                        {openFAQ === index && (
                            <div style={{
                                padding: '20px',
                                backgroundColor: 'white',
                                fontSize: '1.1vw',
                                lineHeight: '1.6',
                                borderTop: `3px solid ${index % 2 === 0 ? '#2E86AB' : '#FF8C42'}`
                            }}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
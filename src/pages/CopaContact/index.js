import React, { Component } from 'react';
import CopaNavigation from '../../components/CopaNavigation';
import CopaPagePhoto from '../../components/CopaShared/CopaPagePhoto';
import Footer from '../../components/Footer';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';
import '../../components/CopaShared/copaDelSolStyle.css';

import ContactForm from './ContactForm';
import EmailContacts from './EmailContacts';

class CopaContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'form'
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        // Check for tab query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        
        // Valid tab names
        const validTabs = ['form', 'emails'];
        
        if (tabParam && validTabs.includes(tabParam)) {
            this.setState({ activeTab: tabParam });
        }
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabContent = () => {
        switch(this.state.activeTab) {
            case 'form':
                return <ContactForm />;
            case 'emails':
                return <EmailContacts />;
            default:
                return <ContactForm />;
        }
    }

    render() {
        return (
            <div>
                <CopaNavigation />
                <CopaPagePhoto imageSource={coverPhoto} title="Contact Us" />

                <div className="copa-tabs">
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'form' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('form')}
                    >
                        Contact Form
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'emails' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('emails')}
                    >
                        Email Contacts
                    </button>
                </div>

                <div className="copa-tab-content">
                    {this.renderTabContent()}
                </div>

                <Footer />
            </div>
        );
    }
}

export default CopaContact;
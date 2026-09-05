import React, { Component } from 'react';
import CopaNavigation from '../../components/CopaNavigation';
import CopaPagePhoto from '../../components/CopaShared/CopaPagePhoto';
import Footer from '../../components/Footer';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';
import '../../components/CopaShared/copaDelSolStyle.css';

import GameRules from './GameRules';
import GameGuidelines from './GameGuidelines';
import FAQs from './FAQs';
import HostingEvent from './HostingEvent';

class CopaGuidelines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'rules'
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        // Check for tab query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        
        // Valid tab names
        const validTabs = ['rules', 'guidelines', 'faqs', 'hosting'];
        
        if (tabParam && validTabs.includes(tabParam)) {
            this.setState({ activeTab: tabParam });
        }
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabContent = () => {
        switch(this.state.activeTab) {
            case 'rules':
                return <GameRules />;
            case 'guidelines':
                return <GameGuidelines />;
            case 'faqs':
                return <FAQs />;
            case 'hosting':
                return <HostingEvent />;
            default:
                return <GameRules />;
        }
    }

    render() {
        return (
            <div>
                <CopaNavigation />
                <CopaPagePhoto imageSource={coverPhoto} title="Guidelines" />

                <div className="copa-tabs">
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'rules' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('rules')}
                    >
                        Game Rules
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'guidelines' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('guidelines')}
                    >
                        Game Guidelines
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'faqs' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('faqs')}
                    >
                        FAQs
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'hosting' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('hosting')}
                    >
                        Hosting an Event
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

export default CopaGuidelines;
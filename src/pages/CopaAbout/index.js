import React, { Component } from 'react';
import CopaNavigation from '../../components/CopaNavigation';
import CopaPagePhoto from '../../components/CopaShared/CopaPagePhoto';
import Footer from '../../components/Footer';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';
import '../../components/CopaShared/copaDelSolStyle.css';

import History from './History';
import Vision from './Vision';
import Mission from './Mission';
import WhoWeAre from './WhoWeAre';

class CopaAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'whoweare'
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        // Check for tab query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        
        // Valid tab names
        const validTabs = ['whoweare', 'mission', 'vision', 'history'];
        
        if (tabParam && validTabs.includes(tabParam)) {
            this.setState({ activeTab: tabParam });
        }
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabContent = () => {
        switch(this.state.activeTab) {
            case 'whoweare':
                return <WhoWeAre />;
            case 'mission':
                return <Mission />;
            case 'vision':
                return <Vision />;
            case 'history':
                return <History />;
            default:
                return <WhoWeAre />;
        }
    }

    render() {
        return (
            <div>
                <CopaNavigation />
                <CopaPagePhoto imageSource={coverPhoto} title="About" />

                <div className="copa-tabs">
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'whoweare' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('whoweare')}
                    >
                        Who We Are
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'mission' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('mission')}
                    >
                        Mission
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'vision' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('vision')}
                    >
                        Vision
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'history' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('history')}
                    >
                        History
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

export default CopaAbout;
import React, { Component } from 'react';
import CopaNavigation from '../../components/CopaNavigation';
import CopaPagePhoto from '../../components/CopaShared/CopaPagePhoto';
import Footer from '../../components/Footer';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';
import '../../components/CopaShared/copaDelSolStyle.css';

import PastSponsors from './PastSponsors';
import Donate from './Donate';

class CopaSponsors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'sponsors'
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        // Check for tab query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        
        // Valid tab names
        const validTabs = ['sponsors', 'donate'];
        
        if (tabParam && validTabs.includes(tabParam)) {
            this.setState({ activeTab: tabParam });
        }
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabContent = () => {
        switch(this.state.activeTab) {
            case 'sponsors':
                return <PastSponsors />;
            case 'donate':
                return <Donate />;
            default:
                return <PastSponsors />;
        }
    }

    render() {
        return (
            <div>
                <CopaNavigation />
                <CopaPagePhoto imageSource={coverPhoto} title="Sponsors" />

                <div className="copa-tabs">
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'sponsors' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('sponsors')}
                    >
                        Sponsors
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'donate' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('donate')}
                    >
                        Donate
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

export default CopaSponsors;
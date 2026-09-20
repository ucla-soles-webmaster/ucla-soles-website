import React, { Component } from 'react';
import CopaNavigation from '../../components/CopaNavigation';
import CopaPagePhoto from '../../components/CopaShared/CopaPagePhoto';
import Footer from '../../components/Footer';
import coverPhoto from '../../Photos/CopaDelSol/copa_del_sol_cover.jpeg';
import '../../components/CopaShared/copaDelSolStyle.css';

import RegisterNow from './RegisterNow';
import Awards from './Awards';
import History from './History';
import PastTeams from './PastTeams';
import PhotoGallery from './PhotoGallery';


class CopaTournaments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'register'
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        
        // Check for tab query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        
        // Valid tab names
        const validTabs = ['register', 'history', 'pastteams', 'photos', 'awards'];
        // Commented out tabs: 'directions', 'waiver' - uncomment to re-enable these pages
        
        if (tabParam && validTabs.includes(tabParam)) {
            this.setState({ activeTab: tabParam });
        }
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabContent = () => {
        switch(this.state.activeTab) {
            case 'register':
                return <RegisterNow />;
            case 'awards':
                return <Awards />;
            case 'history':
                return <History />;
            case 'pastteams':
                return <PastTeams />;
            case 'photos':
                return <PhotoGallery />;
            // Commented out cases - uncomment to re-enable these pages:
            // case 'waiver':
            //     return <Waiver />;
            // case 'directions':
            //     return <Directions />;
            default:
                return <RegisterNow />;
        }
    }

    render() {
        return (
            <div>
                <CopaNavigation />
                <CopaPagePhoto imageSource={coverPhoto} title="Tournaments" />

                <div className="copa-tabs">
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'register' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('register')}
                    >
                        Tournament Info
                    </button>
                    {/* Commented out - uncomment to re-enable Directions page:
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'directions' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('directions')}
                    >
                        Directions
                    </button>
                    */}
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'history' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('history')}
                    >
                        History
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'pastteams' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('pastteams')}
                    >
                        Past Teams
                    </button>
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'photos' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('photos')}
                    >
                        Photo Gallery
                    </button>
                    {/* Commented out - uncomment to re-enable Waiver page:
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'waiver' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('waiver')}
                    >
                        Waiver
                    </button>
                    */}
                    <button 
                        className={`copa-tab ${this.state.activeTab === 'awards' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('awards')}
                    >
                        Awards
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

export default CopaTournaments;
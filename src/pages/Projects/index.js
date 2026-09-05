import React, { Component } from 'react';
import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import Footer from '../../components/Footer';

import SolesRacing from './SolesRacing';
import SolesAI from './SolesAI';
import SolesWebDev from './SolesWebDev';

import coverPhoto from '../../Photos/Covers/Lunabotic.jpg';
import './projectsStyle.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'racing'
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabContent = () => {
        switch(this.state.activeTab) {
            case 'racing':
                return <SolesRacing />;
            case 'ai':
                return <SolesAI />;
            case 'webdev':
                return <SolesWebDev />;
            default:
                return <SolesRacing />;
        }
    }

    render() {
        return (
            <div>
                <Navigation transparentNav={false} />
                <PagePhoto imageSource={coverPhoto} title={"Projects"}></PagePhoto>

                <div className="projects-tabs">
                    <button 
                        className={`projects-tab ${this.state.activeTab === 'racing' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('racing')}
                    >
                        SOLES Racing
                    </button>
                    <button 
                        className={`projects-tab ${this.state.activeTab === 'ai' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('ai')}
                    >
                        SOLES AI
                    </button>
                    <button 
                        className={`projects-tab ${this.state.activeTab === 'webdev' ? 'active' : ''}`}
                        onClick={() => this.handleTabClick('webdev')}
                    >
                        SOLES WebDev
                    </button>
                </div>

                <div className="projects-tab-content">
                    {this.renderTabContent()}
                </div>

                <Footer />
            </div>
        );
    }
}

export default Projects;
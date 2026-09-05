import React, { Component } from 'react';

import './staticCoverPhotoStyle.css';


class StaticCoverPhoto extends Component {
    
    // Add constructor here when necessary
    constructor() {
        super();
        this.state = {
          scrolled: false,
        };
      }
  
    componentDidMount() {
    window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 100;
        if (isTop !== true) {
        this.setState({ scrolled: true });
        } else {
        this.setState({ scrolled: false });
        }
    });
    }

    handler = function() {
        /* Dummy function so that removeEventListener has something to
           pass into */
    }

    componentWillUnmount() {
    window.removeEventListener('scroll', this.handler);
    }

    render() {
        const containerStyle = this.props.imageSource ? 
            { backgroundImage: `url(${this.props.imageSource})` } : {};
        
        return (
            <div className="container" style={containerStyle}>
                <div className={this.state.scrolled ? "scrolled" : "centered"}>
                        {this.props.title || "Society of Latinx Engineers and Scientists"}
                        <hr className={this.state.scrolled ? "HRscrolled" : "HRcentered"}/>
                        <div className={this.state.scrolled ? "bottomscrolled" : "bottom"}>{this.props.subtitle || "University of California, Los Angeles"}</div>
                </div>
            </div>

        );
    }

    
}


export default StaticCoverPhoto;

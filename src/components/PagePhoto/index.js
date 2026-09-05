import React, { Component } from 'react';

import './pagePhotoStyle.css';


class PagePhoto extends Component {
    
    // Add constructor here when necessary
    constructor() {
        super();
        this.state = {
          scrolled: false,
        };
      }
  
    componentDidMount() {
    window.addEventListener('scroll', () => {
        const isTop = window.scrollY < 270;
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
        const containerClass = this.props.solidNavbar ? "container2-solid" : "container2";
        return (
            <body>
                <div className={containerClass} style={{backgroundImage: `url(${this.props.imageSource})`}}>
                    <div className={this.state.scrolled ? "scrolled2" : "centered2"}>
                            &nbsp; &nbsp; {this.props.title}
                    </div>
                    
                </div>
            </body>

        );
    }

    
}


export default PagePhoto;
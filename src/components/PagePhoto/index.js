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
          const isTop = window.scrollY < 250;
          if (isTop !== true) {
            this.setState({ scrolled: true });
          } else {
            this.setState({ scrolled: false });
          }
        });
      }

      handler = function() {
      }
  
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handler);
      }

    render() {
        return (
            <body>
                <div className="container2">
                    <div className={this.state.scrolled ? "scrolled2" : "centered2"}>
                            {this.props.title}
                    </div>
                    <img src={this.props.imageSource} className="parallax2" alt="Cover"></img>
                </div>
            </body>

        );
    }

    
}


export default PagePhoto;
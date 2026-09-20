import React, { Component } from 'react';
import './EBoardCoverPhoto.css';

class EBoardCoverPhoto extends Component {
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
        return (
                <div className="eboard-container" >
                    <img className="eboard-background" src={this.props.imageSource} alt="EBoard Cover" />
                    <div className={this.state.scrolled ? "scrolled2" : "centered2"}>
                            {this.props.title}
                    </div>
                    
                </div>

        );
    }
}

export default EBoardCoverPhoto;
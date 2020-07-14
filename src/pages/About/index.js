import React, { Component } from 'react';

import Navigation from '../../components/Navigation';
import PagePhoto from '../../components/PagePhoto';
import coverPhoto from '../../coverImages/rick.jpg';


class About extends Component {
    
    // Add constructor here when necessary

    render() {
        return (
            <div>
                <Navigation transparentNav={true} />
                <PagePhoto imageSource={coverPhoto} title={"About Us"}></PagePhoto>

                
                
            </div>
        );
    }

    
}


export default About;


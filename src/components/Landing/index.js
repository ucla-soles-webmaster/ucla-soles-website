import React, { Component } from 'react';
//import firebase from '../Firebase'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: '',
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        /*const item = {
            title: this.state.currentItem,
            user: this.state.username
        }*/

        this.setState({
            currentItem: '',
            username: ''
        });

    }



    render() {
        return (
            <div>
                <section>
                </section>
                <section>
                    <div>
                        <ul>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;
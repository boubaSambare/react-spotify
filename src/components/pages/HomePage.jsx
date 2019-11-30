import React, { Component } from 'react';
import './homePage.css'
import MainNav from '../navigation/MainNav';



class HomePage extends Component {
    render() {
        return (
            <div className="main-content">
                <MainNav/>
            </div>
        );
    }
}

export default HomePage;
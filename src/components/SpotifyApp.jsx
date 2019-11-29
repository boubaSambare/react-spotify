import React, { Component } from 'react';
import SideBar from './navigation/SideBar';
import {Container, Row, Col}  from 'reactstrap';
import {BrowserRouter as Router , Route}  from 'react-router-dom';
import HomePage from './pages/HomePage'

class SpotifyApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <SideBar/>
                   <Route path="/" exact component={HomePage}/>
                </div>
            </Router>
        );
    }
}

export default SpotifyApp;
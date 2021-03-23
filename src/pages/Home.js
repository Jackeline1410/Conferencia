import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css'

import astronaut from "../images/astronauts.svg"
import platziconf_logo from "../images/platziconf-logo.svg"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img src={platziconf_logo} alt="Platzi Conf Logo"
                            className="img-fluid mb-2"/>
                            <h1>Badge Management System</h1>
                            <Link className="btn btn-primary" to="/badges">
                                Start
                            </Link>
                        </div>
                        <div className="Home__col d-none d-md-block col-md-8">
                            <img src={astronaut} alt="Astronauts"
                            className="img-fluid p-4"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
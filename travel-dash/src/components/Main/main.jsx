import React, { Component } from 'react';
import './main.css';

export default class Main extends Component {
    render() {
        return (
            <div>
                <title>TravelDash</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="assets/css/main.css" />
                {/* Wrapper */}
                <div id="wrapper">
                    {/* Main */}
                    <div id="main">
                        <div className="inner">
                            {/* Header */}
                            <header id="header">
                                <h1 className="title">TravelDash</h1>
                                <h2 className="tagline">Stay up-to-date on the go</h2>
                            </header>
                        <nav className="navbar">
                            <ul className="links">
                                    <li><a href=""><span className="label">Flight</span></a></li>
                                    <li><a href=""><span className="label">Hotel</span></a></li>
                                    <li><a href=""><span className="label">Rental Car</span></a></li>
                                    <li><a href=""><span className="label">Credit Card</span></a></li>
                                </ul>
                        </nav>
                            {/* Dashboard Options */}
                            <section id="dashboards">
                                <div className="content">
                                    Flight Card
                                    Hotel Card
                                    Rental Car Card
                                    Credit Card Card
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

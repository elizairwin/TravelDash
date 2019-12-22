import React, { Component } from 'react'

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
                                {/* <a href="index.html" class="logo"><strong>Editorial</strong> by HTML5 UP</a> */}
                                <ul className="header">
                                    <li><a href=""><span className="label">Flight</span></a></li>
                                    <li><a href=""><span className="label">Hotel</span></a></li>
                                    <li><a href=""><span className="label">Rental Car</span></a></li>
                                    <li><a href=""><span className="label">Credit Card</span></a></li>
                                </ul>
                            </header>
                            {/* Banner */}
                            <section id="dashboards">
                                <div className="content">
                                    <header>
                                        <h1>Hi there, <br /> Welcome to TravelDash</h1>
                                    </header>
                                    <p></p>
                                    <ul className="contact">
                                        <li className="icon solid fa-envelope"><a href="mailto:elizairwin@gmail.com">elizairwin@gmail.com</a></li>
                                        <li className="icon solid fa-phone">(614) 257-7877</li>
                                    </ul>
                                   </div>
                            </section></div></div></div></div>
        );
    }
};
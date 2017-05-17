"use strict";

var React = require('react');


var Home = React.createClass({
    render: function(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <a href="/" className="navbar-brand">
                                <img src="images/Name-Banner.png" />
                            </a>
                            <ul className="nav navbar-nav">
                                <li><a href="https://facebook.github.io/react/" target="_blank">ReactJS</a></li>
                                <li><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a></li>
                                <li><a href="http://gulpjs.com/" target="_blank">Gulp</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row">
                    <div className="container-fluid col-xs-10 col-xs-offset-1">
                        <div className="jumbotron">
                            <h1>Manish Singh</h1>
                            <p>Responsive React and Flux kickstart.</p>
                            <a href="#" className="btn btn-primary btn-lg">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;
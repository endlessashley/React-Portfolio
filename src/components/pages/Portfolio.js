import React from 'react';

import projectPic1 from '../../images/budget-screenshot.png'
import projectPic2 from '../../images/note-taker-screenshot.png'
import projectPic3 from '../../images/fitness-tracker-screenshot.png'
import projectPic4 from '../../images/calendont-screenshot.png'
import projectPic5 from '../../images/team-profile-screenshot.png'
import projectPic6 from '../../images/shield-screenshot.png'

export default function Portfolio() {
  return (

<div className="container-fluid portfolio" id="portfolio">
        <div className="row align-top">

            
        <div className="col-xs-12 col-md-4">
                <div className="card">
                    <div className="card-title">Progressive Budget</div>
                    <div className="card-body">
                        <div className="container"><img src={projectPic1} className="image"
                                alt="calendont"></img>
                            <div className="overlay">
                                <a target="_blank" href="https://quiet-thicket-67024.herokuapp.com/" className="play-icon"
                                    title="Heroku Deployment">
                                    <i className="fas fa-play-circle"></i>
                                </a>
                                <a target="_blank" href="https://github.com/endlessashley/Progressive-Budget" className="repo-icon"
                                    title="Github Repository">
                                    <i className="far fa-folder-open"></i>
                                </a>
                                <div className="used-tech">Built with Javascript, Node.js, Express.js, MongoDB, Mongoose, IndexedDB, HTML, CSS, Bootstrap</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">A PWA that tracks, compares, and graphs your spending and income</div>
                </div>
            </div>

            

            <div className="col-xs-12 col-md-4">
                <div className="card">
                    <div className="card-title">Note Taker</div>
                    <div className="card-body">
                        <div className="container"><img src={projectPic2}className="image"
                                alt="note-taker"></img>
                            <div className="overlay">
                                <a target="_blank" href="https://cryptic-earth-47562.herokuapp.com/" className="play-icon"
                                    title="Heroku Deployment">
                                    <i className="fas fa-play-circle"></i>
                                </a>
                                <a target="_blank" href="https://github.com/endlessashley/note-taker-2" className="repo-icon"
                                    title="Github Repository">
                                    <i className="far fa-folder-open"></i>
                                </a>
                                <div className="used-tech">Built with Javascript, Node.js, Express.js, HTML, CSS, Bootstrap</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">Write, save, and delete notes and daily to-do lists with ease</div>
                </div>
            </div>

            <div className="col-xs-12 col-md-4">
                <div className="card">
                    <div className="card-title">Fitness Tracker</div>
                    <div className="card-body">
                        <div className="container"><img src={projectPic3} className="image"
                                alt="fitness tracker"></img>
                            <div className="overlay">
                                <a target="_blank" href="https://aqueous-anchorage-97607.herokuapp.com/?id=6162f654a05bf40016ecaa95" className="play-icon"
                                    title="Heroku Deployment">
                                    <i className="fas fa-play-circle"></i>
                                </a>
                                <a target="_blank" href="https://github.com/endlessashley/fitness-tracker-2" className="repo-icon"
                                    title="Github Repository">
                                    <i className="far fa-folder-open"></i>
                                </a>
                                <div className="used-tech">Built with Javascript, Node.js, Express.js, MongoDB, HTML, CSS, Bootstrap</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">Log your cardio and weight training workouts, and track your progress over time</div>
                </div>
            </div>

            <div className="col-xs-12 col-md-4">
                <div className="card">
                    <div className="card-title">CalenDon't</div>
                    <div className="card-body">
                        <div className="container"><img src={projectPic4} className="image"
                                alt="calendont"></img>
                            <div className="overlay">
                                <a target="_blank" href="https://pacific-badlands-48977.herokuapp.com/login" className="play-icon"
                                    title="Heroku Deployment">
                                    <i className="fas fa-play-circle"></i>
                                </a>
                                <a target="_blank" href="https://github.com/endlessashley/CalenDont" className="repo-icon"
                                    title="Github Repository">
                                    <i className="far fa-folder-open"></i>
                                </a>
                                <div className="used-tech">Built with Javascript, MySQL, Sequelize, Express.js, Handlebars, HTML, CSS, Bootstrap</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">The anti-social social calendar, CalenDon't lets you schedule plans with friends, and if BOTH of you secretly opt to cancel, your plans are off guilt-free</div>
                </div>
            </div>

            <div className="col-xs-12 col-md-4">
                <div className="card">
                    <div className="card-title">Team Profile Generator</div>
                    <div className="card-body">
                        <div className="container"><img src={projectPic5} className="image"
                                alt="calendont"></img>
                            <div className="overlay">
                                <a target="_blank" href="https://github.com/endlessashley/team-profile" className="repo-icon-no-deploy"
                                    title="Github Repository">
                                    <i className="far fa-folder-open"></i>
                                </a>
                                <div className="used-tech">Javascript, Node.js, Inquirer, Jest, HTML, CSS</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">A command line application that automatically generates development team profiles based on user input</div>
                </div>
            </div>

            <div className="col-xs-12 col-md-4">
                <div className="card">
                    <div className="card-title">S.H.I.E.L.D. Database</div>
                    <div className="card-body">
                        <div className="container"><img src={projectPic6} className="image"
                                alt="shield"></img>
                            <div className="overlay">
                                <a target="_blank" href="https://endlessashley.github.io/Shield-ID/" className="play-icon"
                                    title="Github Deployment">
                                    <i className="fas fa-play-circle"></i>
                                </a>
                                <a target="_blank" href="https://github.com/endlessashley/Shield-ID/" className="repo-icon"
                                    title="Github Repository">
                                    <i className="far fa-folder-open"></i>
                                </a>
                                <div className="used-tech">Built with Javascript, Third-party APIs, HTML, CSS, Bootstrap, Pure.css</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">Search a database of Marvel superheroes to get character info and GIFs</div>
                </div>
            </div>
        </div>
    </div>


);}
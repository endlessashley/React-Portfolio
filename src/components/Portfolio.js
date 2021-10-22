import React from 'react';
import projectPic1 from '../images/budget-screenshot.png'
import projectPic2 from '../images/note-taker-screenshot.png'
import projectPic3 from '../images/fitness-tracker-screenshot.png'
import projectPic4 from '../images/calendont-screenshot.png'
import projectPic5 from '../images/team-profile-screenshot.png'
import projectPic6 from '../images/shield-screenshot.png'

export default function Portfolio() {
  return (

<div class="container-fluid">
        <div class="row" id="portfolio">

            


            <div class="col-xs-12 col-md-4">
                <div class="card">
                    <div class="card-title">Progressive Budget</div>
                    <div class="card-body">
                        <div class="container"><img src={projectPic1} class="image"
                                alt="calendont"></img>
                            <div class="overlay">
                                <a href="https://quiet-thicket-67024.herokuapp.com/" class="play-icon"
                                    title="Heroku Deployment">
                                    <i class="fas fa-play-circle"></i>
                                </a>
                                <a href="https://github.com/endlessashley/Progressive-Budget" class="repo-icon"
                                    title="Github Repository">
                                    <i class="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-text">A PWA that tracks, compares, and graphs your spending and income</div>
                </div>
            </div>

            

            <div class="col-xs-12 col-md-4">
                <div class="card">
                    <div class="card-title">Note Taker</div>
                    <div class="card-body">
                        <div class="container"><img src={projectPic2} class="image"
                                alt="note-taker"></img>
                            <div class="overlay">
                                <a href="https://cryptic-earth-47562.herokuapp.com/" class="play-icon"
                                    title="Heroku Deployment">
                                    <i class="fas fa-play-circle"></i>
                                </a>
                                <a href="https://github.com/endlessashley/note-taker-2" class="repo-icon"
                                    title="Github Repository">
                                    <i class="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-text">Write, save, and delete notes and daily to-do lists with ease</div>
                </div>
            </div>

            <div class="col-xs-12 col-md-4">
                <div class="card">
                    <div class="card-title">Fitness Tracker</div>
                    <div class="card-body">
                        <div class="container"><img src={projectPic3} class="image"
                                alt="fitness tracker"></img>
                            <div class="overlay">
                                <a href="https://aqueous-anchorage-97607.herokuapp.com/?id=6162f654a05bf40016ecaa95" class="play-icon"
                                    title="Heroku Deployment">
                                    <i class="fas fa-play-circle"></i>
                                </a>
                                <a href="https://github.com/endlessashley/fitness-tracker-2" class="repo-icon"
                                    title="Github Repository">
                                    <i class="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-text">Log your cardio and weight training workouts, and track your progress over time</div>
                </div>
            </div>

            <div class="col-xs-12 col-md-4">
                <div class="card">
                    <div class="card-title">CalenDon't</div>
                    <div class="card-body">
                        <div class="container"><img src={projectPic4} class="image"
                                alt="calendont"></img>
                            <div class="overlay">
                                <a href="https://pacific-badlands-48977.herokuapp.com/login" class="play-icon"
                                    title="Heroku Deployment">
                                    <i class="fas fa-play-circle"></i>
                                </a>
                                <a href="https://github.com/endlessashley/CalenDont" class="repo-icon"
                                    title="Github Repository">
                                    <i class="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-text">The anti-social social calendar, CalenDon't lets you schedule plans with friends, and if BOTH of you secretly opt to cancel, your plans are off guilt-free</div>
                </div>
            </div>

            <div class="col-xs-12 col-md-4">
                <div class="card">
                    <div class="card-title">Team Profile Generator</div>
                    <div class="card-body">
                        <div class="container"><img src={projectPic5} class="image"
                                alt="calendont"></img>
                            <div class="overlay">
                                <a href="https://github.com/endlessashley/team-profile" class="repo-icon-no-deploy"
                                    title="Github Repository">
                                    <i class="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-text">A command line application that automatically generates development team profiles based on user input</div>
                </div>
            </div>

            <div class="col-xs-12 col-md-4">
                <div class="card">
                    <div class="card-title">S.H.I.E.L.D. Database</div>
                    <div class="card-body">
                        <div class="container"><img src={projectPic6} class="image"
                                alt="shield"></img>
                            <div class="overlay">
                                <a href="https://endlessashley.github.io/Shield-ID/" class="play-icon"
                                    title="Github Deployment">
                                    <i class="fas fa-play-circle"></i>
                                </a>
                                <a href="https://github.com/endlessashley/Shield-ID/" class="repo-icon"
                                    title="Github Repository">
                                    <i class="far fa-folder-open"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-text">Search a database of Marvel superheroes to get character info and GIFs</div>
                </div>
            </div>
        </div>
    </div>


);
}
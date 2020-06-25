import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Projects() {

    return(
        <div className="container">
        <div className="projects-container">
            <div className="about-home"><Link to="/">Home</Link></div>
            <div className="projects-title">PROJECTS</div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/recipes.png')}></img></div>
                <div className="project-desc"><span className="emphasis">Secret Family Recipes</span> was designed with HTML, CSS, Javascript, React, React Router, Greensock GSAP, Axios (CRUD) and Yup form validation. It was built to allow users to add their favorite recipes to an online database and then view, edit, update, and delete them as needed.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://secret-recipe.now.sh/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/bw-sectretfamrecipes5/front-end">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/potluck.png')}></img></div>
                <div className="project-desc"><span className="emphasis">Potluck Planner</span> was designed with HTML, CSS, Javascript, React, React Router, Redux, Redux Logger, Redux Thunk, Axios (CRUD) and Yup form validation. The application allows users to create potlucks, invite other users to those potlucks and add items to potlucks for guests to bring.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://potluck-planner-five.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/potluck-planner">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/IG.png')}></img></div>
                <div className="project-desc"><span className="emphasis">Instagram Clone</span> was designed with HTML, CSS, Javascript and React. The application is an Instagram clone that allows you to like a post and filter through posts using the search bar at the top.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://react-components-insta-clone-pro.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/React-Components-Insta-Clone">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/show.png')}></img></div>
                <div className="project-desc"><span className="emphasis">TV Show Application</span> was designed with HTML, CSS, Javascript, React and Axios and then tested with Jest. It was built to allow users to view information about the TV show 'Stranger Things', including a plot summary and a breakdown of each of the seasons available, along with information for every episode within a season.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://react-testing-tv-show-app.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/React-Testing-TV-Show">Click Here!</a></div>
            </div> 
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/bus.png')}></img></div>
                <div className="project-desc"><span className="emphasis">Fun Bus</span> was designed with HTML, CSS and LESS. It was also built to be fully responsive. The web page is a landing page for a travel company designed to showcase some of their vacation options.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://funbusmarketing.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/Preprocessing-II">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/football.png')}></img></div>
                <div className="project-desc"><span className="emphasis">American Football Scoreboard</span> was designed with HTML, CSS, Javascript and React. The application is a football scoreboard where touchdowns and field goals can be added to the home and away team. There is also a countdown timer for the current quarter.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://react-american-football-scoreboard.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/react-american-football-scoreboard">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/starwars.png')}></img></div>
                <div className="project-desc"><span className="emphasis">React Wars</span> was designed with HTML, CSS, React, Styled-components and Axios. The application grabs character names and data from a Star Wars Web API and utilizes pagination to present the data.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://sprint-challenge-react-wars-pro.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/Sprint-Challenge-React-Wars">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/crypto.png')}></img></div>
                <div className="project-desc"><span className="emphasis">CryptoCoin Tracker</span> was designed with HTML, CSS, React, Redux, Redux Logger, Redux Thunk and Axios. It was designed to track the current top ten crypto currencies and retrieve live pricing data on click via a Cryptocurrency Web API.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://cryptocoin-tracker.now.sh/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/React-Redux-App">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/nasa.png')}></img></div>
                <div className="project-desc"><span className="emphasis">NASA Photo of the Day</span> was designed with HTML, CSS, React, Emotion, Styled-components and Axios. The application grabs and displays the photo of the day (for the date chosen) from the official NASA Web API.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://nasa-photo-of-the-day.patrickharl.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/nasa-photo-of-the-day">Click Here!</a></div>
            </div>
            <div className="project-container">
                <div className="project-img-container"><img className="project-img" src={require('../imgs/cypress.png')}></img></div>
                <div className="project-desc"><span className="emphasis">User Onboarding</span> was designed with HTML, CSS, Javascript, React, Axios and Yup and then end-to-end tested with Cypress. It was built to simulate a form that is being used to create new users in a database and was designed to include a variety of input types and form validation for testing purposes.</div>
                <div className="project-link"><span className="emphasis">Project:</span> <a className="project-links" href="https://user-onboarding-cypress.vercel.app/">Click Here!</a></div>
                <div className="github-link"><span className="emphasis">Git Hub:</span> <a className="project-links" href="https://github.com/PatrickHarl/User-Onboarding">Click Here!</a></div>
            </div>   
        </div>
        </div>
        
    );

} export default Projects;
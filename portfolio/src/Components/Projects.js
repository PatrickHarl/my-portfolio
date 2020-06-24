import React from 'react';

function Projects() {

    return(
        <div className="projects-container">
            <div className="projects-title">Projects</div>
            <div className="project-container">
                <img src="../imgs/github.png" className="project-img" />
                <div className="project-desc">Github User and Followers Application was designed with HTML, CSS, React, and axios. The project was focused around making async calls to an API to fetch data for a user and subdata attached to that user, as well as creating reusable components with React to more easily render a users followers.</div>
                <div className="project-link">Project: <a href="https://github-user-and-followers.now.sh/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/PatrickHarl/React-Github-User-Card">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src="../imgs/crypto.png"></img>
                <div className="project-desc">CryptoCoin Tracker was designed with HTML, CSS, React, Redux, and axios. It was designed to track the current top ten crypto currencies and retrieve live pricing data on click.</div>
                <div className="project-link">Project: <a href="https://cryptocoin-tracker.now.sh/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/PatrickHarl/React-Redux-App">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src=""></img>
                <div className="project-desc">Secret Family Recipes was designed with HTML, CSS, React, and axios. It was built to allow users to add their favorite recipes to an online database that would allow them to view, edit, update, and delete them as needed.</div>
                <div className="project-link">Project: <a href="https://front-end-umber.now.sh/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/bw-sectretfamrecipes5/front-end">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src=""></img>
                <div className="project-desc">Potluck Planner was designed with HTML, CSS, React, Redux and axios. The application allows users to create potlucks, invite other users to those potlucks and add items to potlucks for guests to bring.</div>
                <div className="project-link">Project: <a href="https://potluck-planner-rdgazj02z.now.sh/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/Potluck-Planner-2/front-end">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src=""></img>
                <div className="project-desc">NASA Photo of the Day was designed with HTML, CSS, React, Redux and axios. The application allows users to create potlucks, invite other users to those potlucks and add items to potlucks for guests to bring.</div>
                <div className="project-link">Project: <a href="https://nasa-photo-of-the-day.patrickharl.vercel.app/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/PatrickHarl/nasa-photo-of-the-day">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src=""></img>
                <div className="project-desc">American Football Scoreboard was designed with HTML, CSS, and React. The application is a basic football scoreboard where touchdowns and field goals can be added to the home and away team. There is also a timer countdown for the current quarter.</div>
                <div className="project-link">Project: <a href="https://react-american-football-scoreboard.vercel.app/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/PatrickHarl/react-american-football-scoreboard">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src=""></img>
                <div className="project-desc">React Wars was designed with HTML, CSS, React and axios. The application grabs character names and data from a Star Wars API and utilizes pagination to present the data.</div>
                <div className="project-link">Project: <a href="https://sprint-challenge-react-wars-pro.vercel.app/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/PatrickHarl/Sprint-Challenge-React-Wars">Click Here!</a></div>
            </div>
            <div className="project-container">
                <img className="project-img" src=""></img>
                <div className="project-desc">Instagram Clone was designed with HTML, CSS, and React. The application stylistically mimics Instagram posts, allows you to like a post and filter through posts using the search bar at the top.</div>
                <div className="project-link">Project: <a href="https://react-components-insta-clone-pro.vercel.app/">Click Here!</a></div>
                <div className="github-link">Git Hub: <a href="https://github.com/PatrickHarl/React-Components-Insta-Clone">Click Here!</a></div>
            </div>
            
        </div>
        
    );

} export default Projects;
import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    return(

    <div className="main">
      <div className="img-container"><img className="main-img" src="https://images.unsplash.com/photo-1560429506-b505b229870b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"></img></div>
      <div className="divider">
        <div className="sub-divider-left"></div>
        <div className="sub-divider-right"></div>
      </div>
      <div className="container">
        <div className="title-container">
          <div className="name">PATRICK HARL</div>
          <div className="sub-name">FRONT END WEB DEVELOPER</div>
        </div>
      </div>
      <div className="divider">
        <div className="sub-divider-left"></div>
        <div className="sub-divider-right"></div>
      </div>
      <div className="container">
        <div className="btn-layout">
          <button onClick={() => history.push("/projects")} className="btn-projects">PROJECTS</button>
          <button onClick={() => history.push("/about")} className="btn-about">ABOUT</button>
          <button onClick={() => history.push("/contact")} className="btn-contact">CONTACT</button>
        </div>
      </div>
    </div>

    );

} export default Home;
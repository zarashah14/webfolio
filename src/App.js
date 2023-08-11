
import React from 'react';
import './App.css';


// Import images
import challenges from './imges/challenges.png';
import cloud from './imges/cloud.png';
import skills from './imges/skills.png';
import mountain from './imges/mountain.png';
import zara1 from './imges/zara1.png';

function App() {
 
  return (
    <>
      <div className="top-container">
        <img className="top-cloud" src={cloud} alt="hi" />
        <h1><em>I'm Zara Shah</em></h1>
        <h2><em>I'M a web Developer</em></h2>
        <img className="bottom-cloud" src={cloud} alt="hi" />
        <img className="mountains" src={mountain} alt="hi" />
      </div>
      <div className="middle-container">
        <div className="profile">
          <img className="adnan_pic" src={zara1} alt="zara pic" />
          <h3>Hello.</h3>
          <p className="intro">I am the chameleon coder, adapting effortlessly to any tech terrain. With conscientious precision, I tackle challenges head-on, fueled by ambition to conquer the cutting-edge. Like a skilled magician, I swiftly acquire new spells of knowledge</p>
        </div>
        <hr />
        <div className="skills">
          <h3>My Skills.</h3>
          <div className="skill-row">
            <img className="code-img" src={skills} alt="skills pic" />
            <h3></h3>
            <p className="paragraph-description">
              ⭐Web development.<br />
              ⭐Data structures and algorithms.<br />
              ⭐Database and SQL.<br />
              ⭐Artificial intelligence.<br />
              ⭐Object-oriented programming languages.<br />
            </p>
          </div>
          <div className="skill-row">
            <img className="chill-img" src={challenges} alt="challenging pic" />
            <h3>My Projects</h3>
            <p className="paragraph-description2">
              ⭐Junior Web Developer in Remote UAE.<br />
              ⭐YouTuber and Network Marketing Expert.<br />
              ⭐Graphic Designer and Seo Expert.<br />
              ⭐Wordpress Developer And Knows the Programing languages<br />
            </p>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h3>Get In Touch</h3>
          <h3>Why do programmers prefer cats over dogs? Cats have purr-fect error handling - they just ignore you!</h3>
          <p className="contact-message">Why did the software developer go broke? He couldn't find a "bug" in his wallet!</p>
          <a className="btn" href="zarashahhussain22@gmail.com">CONTACT ME</a>
        </div>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/in/zara-shah-8a998423b/">LinkedIn</a>
        <a className="footer-link" href="">Facebook</a>
        <h5 className="final-p">© 2023 Zara Shah.</h5>
      </div>
    </>
  );
}

export default App;

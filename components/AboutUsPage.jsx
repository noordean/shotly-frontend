import React from 'react';
import { Link } from 'react-router-dom';

import chartImage from '../src/public/images/chat.png'

export class AboutUsPage extends React.Component {
	componentDidMount() {
    const aboutUsImage = document.getElementById('about-us-img');
		aboutUsImage.src = chartImage
	}

  render() {
    return (
      <div className="row about-us-page">
          <img id="about-us-img" />
          <div className="about-us-text">
            Shotly provides you with graphical representation of your business growth.
						This shows you the exact number of customers and number of times your site has 
						been visited from different locations around the world.
						<Link to="/signup"> Create an account </Link> to have this wonderful experience.
          </div>
      </div>
    )
  }
};

export default AboutUsPage;

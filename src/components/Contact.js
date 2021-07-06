import React from "react";
import Fade from "react-reveal/Fade";
import $ from "jquery";


class Contact extends React.Component {

  render() {
    return (
      <div id="contact" className="container contactWrapper">
        <Fade bottom>
          <header className="centered">
            <h2 className="contactHeader">
              <span className="accent">Contact </span>Me
            </h2>
          </header>
        </Fade>

        <div className="contactCards">
          <div className="contactCard centered">
            <Fade bottom>
              <div className="contactDetails">
                <div className="centered">
                  <div className="iconBg centered">
                    <span className="icon icon-home"></span>
                  </div>
                </div>
                <div>
                  <h3>My Address</h3>
                  <p>Galzaxy 139GXT, React Planet, Props Zone, Redux.</p>
                </div>
              </div>
            </Fade>
          </div>

          <div className="contactCard centered">
            <Fade bottom>
              <a href="tel:+234-703-068-0817" className="contactDetails">
                <div className="centered">
                  <div className="iconBg centered">
                    <span className="icon icon-phone"></span>
                  </div>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p className="contactLink">+234-907-097-0079</p>
                </div>
              </a>
            </Fade>
          </div>

          <div className="contactCard centered">
            <Fade bottom>
              <a
                href="mailto:adekniyi@gmail.com"
                className="contactDetails"
              >
                <div className="centered">
                  <div className="iconBg centered">
                    <span className="icon icon-mail"></span>
                  </div>
                </div>
                <div>
                  <h3>Email</h3>
                  <p className="contactLink">adekniyi@gmail.com</p>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

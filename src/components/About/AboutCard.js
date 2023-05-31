import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jhon Uzcategui </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br /> I am a graphic designer and front end web developer. 
            <br />
            Everything that can be done with a computer I like to think I can do.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Play the Piano
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Whenever I don't know how to do something, I learn it"{" "}
          </p>
          <footer className="blockquote-footer">Uzcategui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

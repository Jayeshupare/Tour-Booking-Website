import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../shared/CommonSection';
import '../styles/About.css';
import aboutImg from '../assets/images/about-us.jpg';

const About = () => {
  return (
    <>
      <CommonSection title="About Us" />

      <section className="about__section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" sm="12">
              <div className="about__img">
                <img src={aboutImg} alt="about-us" className="img-fluid" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__text">
                <h2>Get to Know Us</h2>
                <p>
                  We’re passionate explorers, committed to making travel easy, affordable,
                  and unforgettable for adventurers across the globe. Our mission is to bring people
                  closer to the world’s most stunning destinations with ease and trust.
                </p>
                <p>
                  At WanderWorld Tours, we believe that travel is more than just visiting new places or it’s about creating stories,
                  discovering cultures, and connecting with the world. We are a team of travel enthusiasts dedicated to designing
                  meaningful and memorable travel experiences.
                </p>
                <p>
                  From carefully curated packages to personalized itineraries, we take care of all the
                  details so you can enjoy the journey.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mission__vision">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="mb-4">
              <div className="mission__box">
                <h3>Our Mission</h3>
                <p>
                  To create safe, affordable, and unforgettable journeys while delivering exceptional customer service and travel value.
                </p>
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="vision__box">
                <h3>Our Vision</h3>
                <p>
                  To become the most trusted and innovative travel platform connecting explorers with the world.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;

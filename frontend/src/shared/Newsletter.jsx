import React from 'react';
import './Newsletter.css';
import { Container, Row, Col } from 'reactstrap';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" md="9" sm="12">
            <div className="newsletter__wrapper">
              <h2 className="newsletter__title">Join Our Travel Community</h2>
              <p className="newsletter__desc">
                Sign up for exclusive tips, travel guides, and special offers delivered straight to your inbox.
              </p>
              <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" className="newsletter__input" placeholder="Your email address" required/>
                <button type="submit" className="newsletter__btn">
                  Subscribe
                </button>
              </form>
              <p className="newsletter__note">No spam, unsubscribe anytime.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;

import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-Tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'


const Home = () => {
  return (
    <>
    {/*hero section*/}
    <section>
      <Container>
      <Row>
        <Col lg='6'>
        <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Book Your Best Tour'}/>
          </div>
          <h2>Traveling opens the door to creating <span className='highlight'> memories </span></h2>
          <p>Step outside your comfort zone and embrace the thrill of travel.
            Each journey offers a chance to discover new places, meet diverse people, and experience different cultures.
            Travel is not just about seeing the world, but about learning, growing, and broadening your perspective.
            Capture unforgettable moments that will inspire you for a lifetime.</p>
        </div>
        </Col>

        <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box hero__video-box mt-4">
          <video src={heroVideo} alt="" controls />
        </div>
        </Col>
        <Col lg='2'>
        <div className="hero__img-box mt-5">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
        <SearchBar />
      </Row>
      </Container>
    </section>

    {/*hero section*/}
    <section>
      <Container>
        <Row>
          <Col lg="3">
          <h3 className='services__subtitle'>What we serve</h3>
          <h3 className='services__title'>We offer our best services</h3>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/*featured tour section*/}
    <Container>
      <Row>
        <Col lg="12" className='mb-5'>
        <h3 className='featured__tour-title'>Our featured tour</h3>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>

    {/*experience section*/}
    <section className="experience-new">
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col lg="6" className="mb-4 mb-lg-0">
            <div className="experience-new__info">
              <h3>Why Travelers Choose Us</h3>
              <p>
                We’re not just a travel agency — we’re a team of explorers who believe in
                meaningful journeys. With over a decade of experience, we curate experiences
                that inspire, relax, and delight.
              </p>
              <ul>
                <li>✔ Customized Travel Plans</li>
                <li>✔ 24/7 Support During Trips</li>
                <li>✔ Handpicked Destinations</li>
              </ul>
            </div>
          </Col>

          {/* Right Column */}
          <Col lg="6">
            <div className="experience-new__stats d-flex flex-wrap gap-4 justify-content-center">
              <div className="stat__box">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat__box">
                <h3>10k+</h3>
                <p>Happy Travelers</p>
              </div>
              <div className="stat__box">
                <h3>99%</h3>
                <p>Satisfaction Rate</p>
              </div>
              <div className="stat__box">
                <h3>50+</h3>
                <p>Destinations Covered</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/*gallery section*/}
    <section>
      <Container>
      <Row>
        <Col lg='12'>
        <h3 className='gallery__title'>Visit our customers tour gallery</h3>
        </Col>
        <Col lg='12'>
        <MasonryImagesGallery />
        </Col>
      </Row>
      </Container>
    </section>

    {/*testimonial section*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          <h3 className='testimonial__title'>Customer Reviews</h3>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>

    {/*newsletter*/}
    <Newsletter />
    </>
  )
}

export default Home

import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col, Card, CardDeck } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'

import MainLayout from '../components/MainLayout/MainLayout'
import styles from './index.module.scss'

const Home: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Home'>
    <div className={styles.backgroundImage}>
      <img src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645473638/background%20images/wonderland-bg.jpg' />
    </div>
    <div className={`${styles.dhHomepageContent} d-flex flex-column justify-content-between`}>
      <Row className='justify-content-center'>
        <Col sm={10} lg={2} className='pt-3 d-flex flex-column align-items-center'>
          <div className='dhLogo'>
            <a href='/' className='stretched-link btn-link'>
              <img
                src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645472154/logos/logo-twenty-two.svg'
                width='447'
                height='373'
                className='img-fluid'
              />
            </a>
          </div>
        </Col>
      </Row>
      <Row className='mb-0 mb-lg-4'>
        <Col>
          <h1 className='text-center mb-2 display-3 text-shadow'>Dark Horse 2022</h1>
          <h2 className='text-center mb-lg-0 text-shadow'>July 22nd, 23rd &amp; 24th</h2>
        </Col>
      </Row>
      <Row className='justify-content-center hp-image-nav'>
        <Col lg={4} className='m-lg-5'>
          <Card className='text-white border m-2'>
            <Card.Img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,h_786,w_1180/v1581407269/background%20images/dark-horse-music-iom-background-003.jpg'
              alt='Card image'
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title>
                <h2>Get Festival Tickets Here</h2>
              </Card.Title>
              <Card.Text>
                <a
                  href='https://www.tickettailor.com/events/darkhorsemusic/606301/'
                  className='btn btn-danger stretched-link'
                  rel='noopener nofollow'
                  target='_blank'
                >
                  Buy Festival Tickets
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={4} className='m-lg-5'>
          <Card className='text-white border m-2'>
            <Card.Img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,h_786,w_1180/v1515573632/background%20images/IMG_9102_ddja66.jpg'
              alt='Card image'
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title>
                <h2>Dark Horse 2022 Lineup</h2>
              </Card.Title>
              <Card.Text>
                <Link href='/lineup'>
                  <a className='btn btn-info stretched-link'>See Details</a>
                </Link>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className='justify-content-center hp-image-nav'>
        <Col lg={4} className='m-lg-5'>
          <Card className='text-white border m-2'>
            <Card.Img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,h_786,w_1180/v1544818833/background%20images/adventure-camp-camping-699558.jpg'
              alt='Card image'
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title>
                <h2>Glamping Packages</h2>
              </Card.Title>
              <Card.Text>
                <a
                  href='https://www.isleofmancamping.co.uk/acatalog/Isle-of-Man-Dark-Horse-Music-Festival.html'
                  className='btn btn-warning stretched-link'
                  rel='noopener nofollow'
                  target='_blank'
                >
                  Visit IOM Camping
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={4} className='m-lg-5'>
          <Card className='text-white border m-2'>
            <Card.Img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/v1542923591/background%20images/art-black-and-white-clouds-906793.jpg'
              alt='Card image'
            />
            <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center'>
              <Card.Title>
                <h2>Dark Horse Festival Facts</h2>
              </Card.Title>
              <Card.Text>
                <Link href='/festival-facts'>
                  <a className='btn btn-success stretched-link'>Find Out More</a>
                </Link>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`${styles.wonderlandText} d-flex justify-content-center`}>
            <img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645472203/logos/wonderland-text.png'
              width='959'
              height='294'
              className='img-fluid'
            />
          </div>
        </Col>
      </Row>
    </div>
  </MainLayout>
)

export default Home

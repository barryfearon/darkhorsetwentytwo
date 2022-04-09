import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'

import MainLayout from '../components/MainLayout/MainLayout'
import styles from './lineup.module.scss'

const Lineup: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Lineup'>
    <div className={styles.backgroundImage}>
      <img src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646767990/background%20images/darkhorse-music-lineup-background-2022.jpg' />
    </div>
    <div className={`${styles.LineupPageContent} d-flex flex-column justify-content-between`}>
      <Header siteLogo={''} />
      <Row className='mb-4'>
        <Col>
          <h1 className='text-center mb-2 display-3 text-shadow'>Dark Horse Lineup 2022</h1>
          <h2 className='text-center mb-4 mb-lg-0 text-shadow'>July 22nd, 23rd &amp; 24th</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <div className='d-flex flex-column flex-lg-row justify-content-around mb-5 mb-lg-0'>
            <div className='d-flex flex-column align-items-center my-2'>
              <h2 className='display-4 mb-4'>Friday 22nd July</h2>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646772938/bands%202022/Dusty_Plankton.jpg'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Dusty Plankton</h3>
              </div>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646771028/bands%202022/Voodoo.png'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Voodoo Bandits</h3>
              </div>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646771028/bands%202022/Toucan_Party.jpg'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Toucan Party</h3>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className='d-flex flex-column flex-lg-row justify-content-around mb-5 mb-lg-0'>
            <div className='d-flex flex-column align-items-center my-2'>
              <h2 className='display-4 mb-4'>Saturday 23rd July</h2>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646771028/bands%202022/Stanton.jpg'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Stanton Warriors &amp; Sian Evans</h3>
              </div>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646771028/bands%202022/Call_Me_Amour.jpg'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Call Me Amour</h3>
              </div>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646772941/bands%202022/Manavia_Lettering_Yellow_3232.png'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Manavia</h3>
              </div>
              {/* <div className='text-center mb-4'>
                <div className='logoContainer bg-dark'>
                  <img
                    src='https://via.placeholder.com/200x200.png/000000/666666?text=TBC'
                    style={{ width: '200px', height: '200px' }}
                  />
                </div>
                <h3>TBC</h3>
              </div> */}
            </div>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className='d-flex flex-column flex-lg-row justify-content-around mb-5 mb-lg-0'>
            <div className='d-flex flex-column align-items-center my-2'>
              <h2 className='display-4 mb-4'>Sunday 24th July</h2>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646771028/bands%202022/penelopeisleslogo.jpg'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Penelope Isles</h3>
              </div>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/v1646772938/bands%202022/TG.png'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>Terrance George &amp; The Shakies</h3>
              </div>
              <div className='text-center mb-4'>
                <div className='logoContainer'>
                  <img
                    src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,h_200/v1646813005/bands%202022/13th-pillar.jpg'
                    className='img-fluid artist-logo'
                  />
                </div>
                <h3>13th Pillar</h3>
              </div>
              {/* <div className='text-center mb-4'>
                <div className='logoContainer bg-dark'>
                  <img
                    src='https://via.placeholder.com/200x200.png/000000/666666?text=TBC'
                    style={{ width: '200px', height: '200px', opacity: 0.5 }}
                  />
                </div>
                <h3>TBC</h3>
              </div> */}
            </div>
          </div>
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
export default Lineup

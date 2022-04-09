import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'

import MainLayout from '../components/MainLayout/MainLayout'
import { Main } from 'next/document'

import styles from './404.module.scss'

const FourOhFour: NextPage = () => (
  <>
    <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='404'>
      <div className={styles.ImageContainer}>
        <img
          src='https://res.cloudinary.com/dark-horse-music/image/upload/v1581495455/background%20images/dark-horse-music-iom-contact-us.jpg'
          className={styles.BgImage}
        />
      </div>
      <Header siteLogo={''} />
      <Row className='justify-content-center'>
        <Col className='col-sm-10 col-lg-8 pt-5 d-flex'>
          <div className='d-flex justify-content-between flex-column mb-5'>
            <div className='dh-content h-100 d-flex flex-column justify-content-center align-items-center'>
              <h1 className='text-center mb-4 display-3'>Dark Horse 2022</h1>
              <h2 className='mb-4 display-4'>404 Error</h2>
              <h3 className='text-center'>
                Looks like you've fallen down the Rabbit Hole! Please click one of the navigation
                options above to return to a Dark Horse webpage.
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </MainLayout>
  </>
)
export default FourOhFour

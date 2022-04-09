import React from 'react'
import Link from 'next/link'
import { Container, Col, Row } from 'react-bootstrap'

import styles from './Footer.module.scss'

interface IFooterProps {
  siteLogo: string
}

export const Footer: React.FC<IFooterProps> = ({ siteLogo }) => {
  return (
    <Container fluid={true} className={`${styles.footer} bg-secondary text-white p-4`}>
      <Row className='justify-content-center align-items-center mb-4'>
        <Col xs={12} lg={2} className='d-flex justify-content-center'>
          <a href='https://www.biosphere.im/' target='blank' rel='nofollow noopener'>
            <img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,w_100,q_100/v1626324808/logos/Proud_to_Partner.png'
              alt='Biosphere Isle of Man'
              width='80'
              height='80'
              className='img-fluid'
            />
          </a>
        </Col>
        <Col xs={12} lg={2} className='d-flex justify-content-center'>
          <a href='https://www.iomarts.com/' target='blank' rel='nofollow noopener'>
            <img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,h_100,q_100/v1510039293/logos/iom-arts-council-logo_y6ktyb.png'
              alt='Isle of Man Arts Council'
              width='272'
              height='100'
              className='img-fluid'
            />
          </a>
        </Col>
      </Row>
      <div className='d-flex justify-content-center'>
        <Link href='privacy'>
          <a className='mx-2'>Privacy</a>
        </Link>
        <Link href='terms'>
          <a className='mx-2'>Terms &amp; Conditions</a>
        </Link>
      </div>
    </Container>
  )
}

export default Footer

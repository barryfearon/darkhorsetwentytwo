import React from 'react'
import Link from 'next/link'
import { Col, Row, Nav } from 'react-bootstrap'

import styles from './Header.module.scss'

interface IHeaderProps {
  siteLogo: string
}

export const Header: React.FC<IHeaderProps> = ({ siteLogo }) => {
  return (
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
      <div className={styles.MainNav}>
        <Link href='/'>
          <a className='btn btn-outline-danger text-white mx-2'>Home Page</a>
        </Link>
        <Link href='/lineup'>
          <a className='btn btn-outline-danger text-white mx-2'>Dark Star Barn</a>
        </Link>
        <Link href='/festival-facts'>
          <a className='btn btn-outline-danger text-white mx-2'>Festival Facts</a>
        </Link>
      </div>
    </Row>
  )
}

export default Header

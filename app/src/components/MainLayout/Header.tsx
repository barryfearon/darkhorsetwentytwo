import React from 'react'
import Link from 'next/link'
import { Col, Row, Nav } from 'react-bootstrap'
import { NavigationItems } from './NavigationItems'
import MobileNavigation from '../MainLayout/MobileNavigation'

import styles from './Header.module.scss'

interface IHeaderProps {
  siteLogo: string
}

export const Header: React.FC<IHeaderProps> = ({ siteLogo }) => {
  return (
    <>
      <MobileNavigation />
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
          <NavigationItems />
        </div>
      </Row>
    </>
  )
}

export default Header

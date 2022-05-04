import { NextPage } from 'next'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'
import MainLayout from '../components/MainLayout/MainLayout'

import styles from './site-map.module.scss'

const SiteMap: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='SiteMap'>
    <Header siteLogo={'false'} />
    <div className={styles.sitemapContainer}>
      <div className={styles.sitemapRow}>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/q_30/v1650621192/sitemaps/twenty-two/darkhorse-twenty-two-site-map-01.jpg'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default SiteMap

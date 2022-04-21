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
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531108/sitemaps/twenty-two/dh-site-map-1.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-2.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-3.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
      </div>
      <div className={styles.sitemapRow}>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-4.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-5.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-6.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
      </div>
      <div className={styles.sitemapRow}>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-7.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-8.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
        <div className={styles.sitemapImage}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1650531109/sitemaps/twenty-two/dh-site-map-8-1.png'
            style={{ width: '585px', height: '757px' }}
          />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default SiteMap

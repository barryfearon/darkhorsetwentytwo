import { NextPage } from 'next'
import Image from 'next/image'
import { buildUrl, extractPublicId } from 'cloudinary-build-url'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'
import MainLayout from '../components/MainLayout/MainLayout'

const publicId = extractPublicId(
  'https://res.cloudinary.com/dark-horse-music/image/upload/v1650621192/sitemaps/twenty-two/darkhorse-twenty-two-site-map-01.jpg'
)

const sm1 = buildUrl(publicId, {
  cloud: {
    cloudName: 'dark-horse-music'
  }
})

const sm1Blur = buildUrl(publicId, {
  cloud: {
    cloudName: 'dark-horse-music'
  },
  transformations: {
    rawTransformation: 'e_blur:2000,q_1'
  }
})

const SiteMap: NextPage = () => {
  return (
    <>
      <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='SiteMap'>
        <Header siteLogo={'false'} />
        <div className='pt-4'>
          <div
            style={{
              position: 'relative',
              height: 0,
              paddingTop: `${(2481 / 1755) * 100}%`,
              backgroundImage: `url(${sm1Blur})`,
              backgroundPosition: 'center center',
              backgroundSize: `100%`
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0'
              }}
            >
              <Image src={sm1} width='1755' height='2481' />
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default SiteMap

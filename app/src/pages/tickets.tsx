import { NextPage } from 'next'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'
import MainLayout from '../components/MainLayout/MainLayout'

import styles from './tickets.module.scss'

const Tickets: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Tickets'>
    <div className='backgroundImage'>
      <img src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645473638/background%20images/wonderland-bg.jpg' />
    </div>

    <Header siteLogo={''} />

    <Row>
      <Col>
        <div
          dangerouslySetInnerHTML={{
            __html:
              // tslint:disable-next-line: quotemark
              "<div class='tt-widget'><div class='tt-widget-fallback'><p><a href='https://www.tickettailor.com/checkout/new-session/id/1063874/chk/ed47/?ref=website_widget' target='_blank'>Click here to buy tickets</a><br /><small><a href='https://www.tickettailor.com?rf=wdg' class='tt-widget-powered'>Sell tickets online with Ticket Tailor</a></small></p></div><script src='https://cdn.tickettailor.com/js/widgets/min/widget.js' data-url='https://www.tickettailor.com/checkout/new-session/id/1063874/chk/ed47/' data-type='inline' data-inline-minimal='true' data-inline-show-logo='false' data-inline-bg-fill='false' data-inline-inherit-ref-from-url-param='' data-inline-ref='website_widget'></script></div>"
          }}
        />
      </Col>
    </Row>
  </MainLayout>
)

export default Tickets

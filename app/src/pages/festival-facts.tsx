import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'

import MainLayout from '../components/MainLayout/MainLayout'
import styles from './festival-facts.module.scss'

const Facts: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Festival Facts'>
    <Header siteLogo={''} />
    <Row className={`${styles.factsRow} justify-content-center`}>
      <Col className='col-sm-10 col-lg-8 d-flex justify-content-between flex-column'>
        <div>
          <div className='dh-content'>
            <h1 className='text-center mb-4 display-3'>Dark Horse 2022</h1>
            <h2>Simple Festival Facts</h2>
            <ul>
              <li>
                Camping is included…this means tents and camper vans (no transit vans). Must be a
                registered motorhome or caravan
              </li>
              <li>If you bring a campervan it must remain on site until the Sunday</li>
              <li>
                We have a strict quiet / family camping area with no noise after 1am or face
                ejection!
              </li>
              <li>
                All Live in Vehicles/Trailer Tents &amp; Caravans etc. will only be allowed onto the
                campsite between 12:00 and 19:00 on Friday the 23rd July 2021 &amp; between 10:00
                and 12:00 on Saturday the 24th July 2021
              </li>
              <li>Dogs are permitted but must be on leads at ALL times</li>
              <li>Children 12 and under do not need a ticket</li>
              <li>You may bring alcohol on to the camping site but not the licenced area</li>
              <li>
                Do not bring glass onto the site….it's a working farm so think of the cow's feet!
              </li>
              <li>Bring ID or no entry</li>
              <li>Lost wristband means no more festival…KEEP THEM ON</li>
              <li>
                There will be food vendors but small BBQs are permitted if kept off the ground(if
                the summer is too dry we may revoke this)
              </li>
            </ul>
            <p>
              Look out for each other and respect the environment. If you decide to leave all your
              tents/chairs/bedding and litter we will ban you from subsequent events!! So we thank
              you, in advance for keeping the site clean 🙂 We advise you read our terms and
              conditions before you attend the festival.
            </p>
            <p>
              Bell tents are provided by{' '}
              <a href='isleofmancamping.co.uk' rel='nofollow noopener' target='_blank'>
                isleofmancamping.co.uk
              </a>
              . Dark Horse Music Limited are not the supplier of these tickets, please contact
              &nbsp;
              <a href='isleofmancamping.co.uk' rel='nofollow noopener' target='_blank'>
                isleofmancamping.co.uk
              </a>
              &nbsp; directly for information about camping tickets.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </MainLayout>
)

export default Facts

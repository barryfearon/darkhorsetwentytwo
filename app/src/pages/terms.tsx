import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/MainLayout/Header'

import styles from './privacy.module.scss'

import MainLayout from '../components/MainLayout/MainLayout'

const Terms: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Privacy'>
    <Header siteLogo={''} />
    <Row className='justify-content-center'>
      <Col className='col-sm-10 col-lg-8 d-flex justify-content-between flex-column'>
        <div>
          <div className='dh-content'>
            <h1 className='text-center mb-4 display-3'>Dark Horse 2022</h1>
            <h2 className='mb-4'>Terms &amp; Conditions</h2>
            <h4>
              As a result of purchasing a ticket and entry onto the festival site, all ticket
              holders consent to the following:
            </h4>
            <ol>
              <li>No admission without a ticket.</li>
              <li>
                <ol>
                  <li>Tickets can be transferred but only by the owner of the existing ticket.</li>
                  <li>
                    The email requesting the transfer must be from the email address that the
                    original ticket was purchased from.
                  </li>
                  <li>
                    You will be required to send full details of the proposed new owner - Full name;
                    Address &amp; Email address, to:
                  </li>
                  <li>
                    <a href='mailto:tickets@darkhorsemusic.im'>tickets@darkhorsemusic.im</a>.
                  </li>
                  <li>
                    The new owner will then be sent a form to complete, confirming that they have
                    read and understand the Dark Horse Limited terms and conditions
                  </li>
                  <li>
                    On completion, the new owner will be sent a copy of the updated ticket to the
                    new email address provided.
                  </li>
                  <li>
                    The cut off date for transfers is midnight, 7 days prior to the event start date
                  </li>
                </ol>
              </li>
              <li>
                The event opens to the public on the
                <strong>22nd July 2022</strong>
                at
                <strong>12:00.</strong>
              </li>
              <li>
                The event will end on the <strong>24th July 2022</strong> at <strong>22:00.</strong>
              </li>
              <li>
                Camping is included as part of the ticket price for the nights of the{' '}
                <strong>22nd</strong>
                and
                <strong> 23rd </strong>
                and
                <strong> 24th </strong>
                of
                <strong> July 2022 </strong>
                only. An extra charge will be incurred if participants remain on the campsite and
                are still found to be on the site after&nbsp;the&nbsp;
                <strong>25th July</strong> <strong>2022</strong> or later.
              </li>
              <li>
                Live in Vehicles/Trailer Tents/Caravans etc. can only camp in the designated
                campsite and having entered the site cannot leave until the&nbsp;
                <strong>24th July 2022</strong> when stewards will be available to direct the flow
                of traffic.
              </li>
              <li>
                All Live in Vehicles/Trailer Tents &amp; Caravans etc. will{' '}
                <strong>
                  only be allowed onto the campsite between 12:00 and 20:00 on Friday the 22nd July
                  2022 &amp; between 10:00 and 12:00 on Saturday the 23rd July 2022
                </strong>
                . After these times all vehicles will be required to be parked in the car parking or
                camping vehicle areas.
              </li>
              <li>
                Designated camping areas will be marked out. Make sure you pay attention, you will
                be asked to move if you are outside of these areas.
              </li>
              <li>
                The use of the campsite is available to Dark Horse ticket holders from{' '}
                <strong>12 noon Friday 22nd July 2022</strong>
                &nbsp;until
                <strong>10am Monday 25th July 2022</strong>.
              </li>
              <li>
                Anyone found have left their litter, after the event, which requires the Dark Horse
                Event Team to clean up will be refused entry for any future events.
              </li>
              <li>
                Live in vehicles that require electricity will be directed to the appropriate area
                by the site staff. Availability is on a first come first serve basis.
              </li>
              <li>
                Do not leave money or valuables in your tents or cars as thieves sometimes operate
                in the camping areas.
              </li>
              <li>
                All ticket holders and crew agree to comply with any searches which designated
                festival security deem necessary to their person, vehicle, live in vehicle, luggage
                or equipment.
              </li>
              <li>Lasers and strobe lighting may be used at the festival.</li>
              <li>
                Be aware music played may well be in excess of 100 decibels and prolonged exposure
                can damage hearing especially to young children.
              </li>
              <li>
                People with disabilities interested in attending the festival should apply directly
                to&nbsp;<a href='mailto:tickets@darkhorsemusic.im'>tickets@darkhorsemusic.im</a>
              </li>
              <li>
                No swimming allowed, people swimming in the Sulby river will be ejected from site.
              </li>
              <li>
                Under 18s including Teenage Ticket holders must be accompanied by an adult (aged
                over 21) at all times.
              </li>
              <li>
                Children aged 12 years and under can attend the event for free when accompanied by
                an adult. A maximum of 2 children under 12 per adult.
              </li>
              <li>
                Photo ID regarding the age of adults and children attending will be requested at the
                box office.
              </li>
              <li>
                Dogs are allowed on the site but must be on a lead and restrained at all times.
              </li>
              <li>
                Emergency vehicle access on the campsite will be clearly marked out. Tents will be
                removed if erected on emergency vehicle access clearways.
              </li>
              <li>Line-up is subject to change and without notice.</li>
              <li>All fires are required to be held off the ground in purpose made fire pits.</li>
              <li>
                Trespassing on adjoining private property will result in expulsion from the event.
              </li>
              <li>
                No unauthorised recordings of the event. All images, videos and sound recordings
                remain the property of Dark Horse Music Ltd.
              </li>
              <li>Cameras for personal use are allowed.</li>
              <li>
                Ticket holders consent to the filming, sound recording and photography of themselves
                as part of the audience.
              </li>
              <li>
                Tickets will not be refunded in any circumstances, other than the total cancellation
                of the event, when only the face value of the ticket will be refunded.
              </li>
              <li>Rights of admission reserved.</li>
              <li>Ticket holders enter at their own risk.</li>
              <li>
                Dangerous behaviour, fly pitching or sale of any other goods or other unauthorised
                trading will result in immediate expulsion from the site.
              </li>
              <li>
                Dark Horse Music Limited. has no liability for the loss or damage of vehicles, goods
                or other materials belonging to guests and crew attending the Dark Horse Music &amp;
                Arts Festival.
              </li>
              <li>
                You are permitted to bring alcohol for your own personal consumption into the
                camp-site but not into any <strong>licensed areas</strong> – this is a condition of
                our license.
              </li>
              <li>
                We reserve the right to refuse entry to anyone we suspect of bringing in alcohol not
                for personal consumption.
              </li>
              <li>
                It is illegal to sell alcohol to or purchase alcohol for anyone younger than 18
                years of age. For licensing reasons people aged 17 and under must stay at least 2m
                away from any bar front on site. If you appear to be under 21 you will be asked for
                ID.
              </li>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  </MainLayout>
)
export default Terms

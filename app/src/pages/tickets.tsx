import { NextPage } from 'next'

import MainLayout from '../components/MainLayout/MainLayout'

const Tickets: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Tickets'>
    <h1 className='text-center mb-4'>Dark Horse Music Ticket Information</h1>
    <h3 className='text-center'>
      Dark Horse Music 2021 – The Night Circus
      <br />
      July 22nd, 23th, 24th
    </h3>
    <h2 className='text-center text-danger my-4'>2021 tickets have now sold out</h2>

    <div className='row justify-content-center'>
      <div className='col-10 mb-5'>
        <div className='d-flex justify-content-center'>
          <div className='tt-widget'>
            <div className='tt-widget-fallback text-center'>
              <p>
                <a
                  href='https://www.tickettailor.com/all-tickets/darkhorsemusic/?ref=website_widget'
                  target='_blank'
                >
                  Click here to buy tickets
                </a>
              </p>
            </div>
            <script
              src='https://cdn.tickettailor.com/js/widgets/min/widget.js'
              data-url='https://www.tickettailor.com/all-tickets/darkhorsemusic/'
              data-type='inline'
              data-inline-minimal='true'
              data-inline-show-logo='false'
              data-inline-bg-fill='false'
              data-inline-inherit-ref-from-url-param=''
              data-inline-ref='website_widget'
            />
          </div>
        </div>
        <h4 className='text-center mb-4'>Simple Festival Facts</h4>
        <div className='row justify-content-center mb-4'>
          <div className='col-12 col-md-8'>
            <ul className='d-block simple-fest-facts'>
              <li className='mb-3'>
                Camping is included…this means tents and camper vans (no transit vans- must be a
                registered motorhome or caravan)
              </li>
              <li className='mb-3'>
                If you bring a campervan it must remain on site until the Sunday
              </li>
              <li className='mb-3'>
                We have a strict quiet / family camping area no noise after 1am or face ejection!
              </li>
              <li className='mb-3'>
                All Live in Vehicles/Trailer Tents &amp; Caravans etc. will only be allowed onto the
                campsite between 12:00 and 20:00 on Friday the 23rd July 2021 &amp; between 10:00
                and 12:00 on Saturday the 24th July 2021
              </li>
              <li className='mb-3'>Dogs are permitted but on leads at ALL times</li>
              <li className='mb-3'>Children 12 and under do not need a ticket</li>
              <li className='mb-3'>Do not bring glass onto the site….it’s a working farm</li>
              <li className='mb-3'>Bring ID</li>
              <li className='mb-3'>Lost wristband means no more festival…KEEP THEM ON</li>
              <li className='mb-3'>
                There will be food vendors but small BBQs are permitted if kept off the ground(if
                the summer is too dry we may revoke this)
              </li>
              <li className='mb-3'>
                Look out for each other and respect the environment, we thank you for this
              </li>
            </ul>
            <div className='d-flex flex-column align-items-center'>
              <img
                draggable='false'
                role='img'
                className='emoji d-block mt-4'
                alt='🙂'
                src='https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg'
                height='50'
                width='50'
              />
              <br />
              <p>
                We advise you read our &nbsp;
                <a href='terms'>&nbsp;terms and conditions&nbsp;</a> before you attend the festival
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8'>
            <p className='text-center'>
              Bell tents are provided by &nbsp;
              <a
                href='https://www.isleofmancamping.co.uk/acatalog/Isle-of-Man-Dark-Horse-Music-Festival.html'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='isleofmancamping.co.uk (opens in a new tab)'
              >
                isleofmancamping.co.uk
              </a>
              . Dark Horse Music Limited are not the supplier of these tickets, please contact
              &nbsp;
              <a
                href='https://www.isleofmancamping.co.uk/acatalog/Isle-of-Man-Dark-Horse-Music-Festival.html'
                target='_blank'
                rel='noreferrer noopener'
                aria-label=' (opens in a new tab)'
              >
                isleofmancamping.co.uk
              </a>
              &nbsp; directly for information about camping tickets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default Tickets

import { NextPage } from 'next'

import MainLayout from '../components/MainLayout/MainLayout'

const About: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='About Us'>
    <div className='row justify-content-center'>
      <div className='col-12 col-sm-10 col-md-8 col-lg-6 mb-5'>
        <h1 className='text-center mb-4 text-white'>About Dark Horse</h1>
        <h3 className='widget-title mb-4'>SO WHATS IT ALL ABOUT..?</h3>
        <p>
          The Dark Horse Isle of Man Music Festival is all about celebrating the Isle of Man music
          festival, arts and culture scene and is now in it’s fourth year. We plan to improve the
          event year on year by offering: days of music, camping and good company, along with
          activities, workshops and stalls for the mind, body, soul, eardrums and taste buds.
        </p>
        <p>
          It’s <b>happening </b>over the weekend of July 22, 23, 24, at the same beautiful location
          –
          <a href='http://sillymooscampsite.co.uk/' target='_blank' rel='noopener noreferrer'>
            Silly Moos Campsite, Ballakillingan Farm, Ramsey
          </a>
          .
        </p>
        <p>
          The resident cows have kindly agreed to vacate their barn for us to transform into the
          festival’s main music stage, while the surrounding fields (as well as housing our
          campsites) will be alive with local food producers, artists, teachers and musicians
          sharing what they do.
        </p>
        <h2 className='my-4'>Isle of Man Music Festival</h2>
        <p>
          Live musicians and DJs – from both the&nbsp;Isle of Man music festival scene and the UK
          are being booked as we speak…
        </p>
        <p>
          Keep an eye on this site and our{' '}
          <a href='https://www.facebook.com/darkhorseiom/' className='text-white'>
            Facebook page
          </a>{' '}
          for announcements on the Isle of Man music line-up.
        </p>
        <p>
          The Dark Horse Music team have&nbsp;experience in organising Manx live events since 2008.
          During this time Dark Horse Music&nbsp;have hosted many successful Isle of Man music
          festival gigs with&nbsp;top UK festival acts. With help from other musicians and friends,
          we want this festival to be something that brings together community people, doing good
          things!
        </p>
        <p>
          In short, we’re excited. However we also believe – to keep our feet on the ground &nbsp;–
          that modesty is the best policy. We are slowly growing the event but not in a way that is
          unsustainable. So if you bring yourselves, your friends, a tent and your ticket… we’ll
          sort out the folk; the funk; the soul; the strings; the beats; the decorations; the
          campfire and everything else in our power to make it a very special time.
        </p>
      </div>
    </div>
  </MainLayout>
)

export default About

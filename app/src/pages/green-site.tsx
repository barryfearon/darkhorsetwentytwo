import { NextPage } from 'next'

import MainLayout from '../components/MainLayout/MainLayout'

const GreenSite: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Green Site Info'>
    <div className='row justify-content-center'>
      <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
        <h1 className='has-text-align-center text-center mb-4 text-white'>
          Keeping Our Green Site Clean
        </h1>

        <h2 className='has-text-align-left text-white'>Take small steps to use up less stuff</h2>

        <p className='has-text-align-left text-white'>
          We all know that sinking feeling; on your way out of a festival after such a positive
          weekend, and walking past heaped piles of WASTE. Acres of discarded plastic cups,
          wrappers, bottles… tents, chairs, camping stoves… the inevitable signs of a good time?
        </p>

        <p className='has-text-align-left text-white'>It doesn’t have to be this way!</p>

        <h3 className='has-text-align-left text-white'>Here’s how:</h3>

        <hr className='wp-block-separator' />

        <h3 className='has-text-align-left text-white'>1. BRING IT!</h3>

        <p className='has-text-align-left text-white'>
          Bring your own refillable water bottle if possible, there is plenty of drinkable water on
          site. Remember to bring a cup along for hot drinks. We are hoping to organise a system at
          the bar which will keep wasted plastic to a minimum.
        </p>

        <h3 className='has-text-align-left text-white'>2. KEEP IT!</h3>

        <p className='has-text-align-left text-white'>
          Abandoned tents and camping equipment is a festival classic, but why not keep hold of it
          and enjoy the great Manx outdoors ALL summer? Please take everything home and reuse it
          again or donate it to a charity shop for it to be reused.
        </p>

        <h3 className='has-text-align-left text-white'>3. LEAVE IT!</h3>

        <p className='has-text-align-left text-white'>
          Remove all excess packaging from new items being brought to the festival. It’s less to
          carry and leave behind.
        </p>

        <h3 className='has-text-align-left text-white'>4. REDUCE IT!</h3>

        <p className='has-text-align-left text-white'>
          Keep a lid on your exhaust fumes (and get some quality time with fellow passengers!) by
          sharing lifts to and from the site. Or cycle along. Ballakillingan Farm is well served by
          bus services 5 and 6. And Ramsey is well served by the Electric Railway!
        </p>

        <h4 className='has-text-align-left'>Bus Time Table Info</h4>

        <p className='has-text-align-left'>5, 5A, 5C, 5J, 6, 6A, 6C, &amp; N5</p>

        <h3 className='has-text-align-left text-white'>5. THINK ABOUT IT!</h3>

        <p className='has-text-align-left text-white'>
          Think re-use rather than single use. A camping stove beats a disposable BBQ, and wet wipes
          don’t degrade or compost, so please don’t bring them.
        </p>

        <blockquote className='wp-block-quote'>
          <p>
            Lets keep the site beautiful so we can keep coming back to enjoy this amazing festival.
          </p>
        </blockquote>

        <hr className='wp-block-separator' />
      </div>
    </div>
  </MainLayout>
)

export default GreenSite

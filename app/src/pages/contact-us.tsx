import { NextPage } from 'next'

import MainLayout from '../components/MainLayout/MainLayout'

const Contact: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Contact Us'>
    <div className='row justify-content-center vh-100'>
      <div className='col-sm-12 col-md-8 col-lg-4'>
        <h1 className='text-center text-white mb-4'>Contact Form</h1>
        <h5 className='my-4 text-center'>
          Please use the form below to send us a message. We will usually respond within 24hrs.
        </h5>
        <form action='https://formspree.io/f/xbjoaloa' method='POST'>
          <div className='form-group'>
            <label htmlFor='FormControlInput1'>Email address</label>
            <input type='email' name='_replyto' className='form-control' id='FormControlInput1' />
          </div>
          <div className='form-group'>
            <label htmlFor='FormControlTextarea1'>Message</label>
            <textarea className='form-control' id='FormControlTextarea1' name='message' rows={5} />
          </div>
          <div className='text-right'>
            <button type='submit' className='btn btn-danger btn-lg'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </MainLayout>
)

export default Contact

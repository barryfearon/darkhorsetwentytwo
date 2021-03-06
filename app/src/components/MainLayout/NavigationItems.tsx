import React from 'react'
import Link from 'next/link'

import styles from './NavigationItems.module.scss'

export const NavigationItems: React.FC = ({}) => {
  return (
    <>
      <Link href='/'>
        <a className='btn btn-outline-danger text-white mx-2'>Home Page</a>
      </Link>
      <Link href='https://www.tickettailor.com/events/darkhorsemusic/606301/'>
        <a className='btn btn-outline-danger text-white mx-2'>Buy Tickets</a>
      </Link>
      <Link href='/lineup'>
        <a className='btn btn-outline-danger text-white mx-2'>The Barn Stage</a>
      </Link>
      <Link href='/site-map'>
        <a className='btn btn-outline-danger text-white mx-2'>Site Map</a>
      </Link>
      <Link href='/festival-facts'>
        <a className='btn btn-outline-danger text-white mx-2'>Festival Facts</a>
      </Link>
    </>
  )
}

import React from 'react'
import styles from './Bio.module.css'

const Bio = () => {
  return (
    <div className={styles.container}>
      <div className='font-preahvihear'>
        <h1 className='text-4xl'>I&apos;m a Wizard Harry.</h1>
        <h2 className='text-3xl'>I&apos;m a Software Engineer.</h2>
        <p className='mt-10 text-3xl'>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goals.</p>
      </div>
    </div>
  )
}

export default Bio

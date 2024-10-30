import React from 'react'
import styles from './Bio.module.css'
const Bio = () => {
  return (
    <div className={styles.container}>
      <div >
        <h1 className='text-4xl'>I’m a Wizard Harry.</h1>
        <h2 className='text-xl'>I’m a Software Engineer.</h2>
        <p className='mt-10 text-3xl'>A software developer with a hands-on approach to learning and building. From Docker containers to real-time web applications, I enjoy digging into the tech to make things work efficiently. My portfolio is where I share my favorite projects.</p>
      </div>
    </div>
  )
}

export default Bio

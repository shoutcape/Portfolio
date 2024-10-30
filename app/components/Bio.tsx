import React from 'react'
import styles from './Bio.module.css'
const Bio = () => {
  return (
    <div className={styles.container}>
      <div >
        <h1 className='text-4xl'>You’re a Wizard Harry.</h1>
        <h2 className='text-xl'>I’m a Software developer.</h2>
        <p className='mt-10 text-3xl'>Passionate about building efficient, real-world solutions. With a hands-on approach, I delve into everything from Docker containers to real-time web applications. I enjoy solving complex tech challenges, always with an eye on optimization. Welcome to my portfolio, where I showcase some of my favorite projects.</p>
      </div>
    </div>
  )
}

export default Bio

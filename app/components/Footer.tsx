import React from 'react'
import LinkedinSVG from '@/../public/social-media-svgs/linkedin.svg'
import GithubSVG from '@/../public/social-media-svgs/github.svg'

const Footer = () => {
  return (
    <footer className="footer footer-center mt-10 bg-base-300 p-10">
      <nav>
        <div className="grid grid-flow-col gap-10">
          <a className='w-10' href='https://www.linkedin.com/in/villekautiainen/' target='_blank'>
            <LinkedinSVG />
          </a>
          <a className='w-10' href='https://github.com/shoutcape' target='_blank'>
            <GithubSVG />
          </a>
        </div>
      </nav>
      <h3 className='text-lg'> kautiainen.ville@gmail.com </h3>
    </footer>
  )
}

export default Footer

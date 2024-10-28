'use client';
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-3xl mb-10'>Projects</h1>
      <div className={`${styles.projectContainer}`}>
        <div className={`${styles.textContainer}`}>
          <h1 className='text-3xl'>Example Project</h1>
          <div>
            <p>A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.</p>
          </div>
        </div>
        <div className={`${styles.previewContainer}`}>
        </div>
      </div>

      <div className={`${styles.projectContainerReverse}`}>
        <div className={`${styles.textContainer}`}>
          <h1 className='text-3xl'>Example Project</h1>
          <div>
            <p>A web app for visualizing personalized Spotify data. View your
              top artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.</p>
          </div>
        </div>
        <div className={`${styles.previewContainer}`}>
        </div>
      </div>
    </div >
  )
}

export default Projects

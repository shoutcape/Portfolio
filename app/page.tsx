import Monitor from './components/Monitor'
import Coffee from './components/Coffee'
import styles from './styles/mainpage.module.css'
import Keyboards from './components/Keyboards'
import ModalButton from './components/ModalButton'
import Bio from './components/Bio'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'


const App = () => {
    return (
      <>
        <ModalButton />
        <div className={styles.container}>
          <Monitor />
          <div className={styles.name}>
            <h1>Ville <br/> Kautiainen</h1>
          </div>
          <Coffee />
          <Keyboards />
        </div>
      <div className='flex flex-col items-center gap-32'>
        <Bio/>
        <Technologies/>
      </div>
        <Projects />
        <Footer />
      </>
    )
  }

export default App

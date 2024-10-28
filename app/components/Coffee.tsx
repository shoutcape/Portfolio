import styles from './DeskItems.module.css'
import Coffeesvg from '@/../public/desk-item-svgs/Coffee1.svg'

// Rememeber to make viewBox the size of the path

const Coffee = () => {
  return (
      <div className={styles.shadow}>
        <Coffeesvg className={styles.svg} viewBox='0 0 190 155' />
      </div>
  )
}

export default Coffee

import styles from './DeskItems.module.css'
import Left from '@/../public/desk-item-svgs/aurora corne left.svg'
import Right from '@/../public/desk-item-svgs/aurora corne right.svg'

// Rememeber to make viewBox the size of the path

const Keyboards = () => {
  return (
      <div className={styles.keyboards}>
        <Left className={styles.svg} viewBox='0 0 375 292' />
        <Right className={styles.svg} viewBox='0 0 372 287' />
      </div>
  )
}

export default Keyboards

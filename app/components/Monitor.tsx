import styles from './DeskItems.module.css'
import Screen from '@/../public/desk-item-svgs/Computer.svg'

// Rememeber to make viewBox the size of the path

const Monitor = () => {
  return (
      <div className={styles.shadow}>
        <Screen className={styles.svg} viewBox='0 0 1107 248' />
      </div>
  )
}

export default Monitor

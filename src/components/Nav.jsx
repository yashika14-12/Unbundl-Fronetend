import styles from '../styles/Nav.module.css'
import { PhoneIcon } from '../icons/icons'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMain}>whistle</span>
          <span className={styles.logoSub}>AND SMILE</span>
        </a>
        <button className={styles.phoneBtn} aria-label="Call us">
          <PhoneIcon size={20} color="#fff" />
        </button>
      </div>
    </nav>
  )
}

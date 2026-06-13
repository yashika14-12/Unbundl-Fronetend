import styles from '../styles/AnnouncementBar.module.css'

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <p className={styles.text}>
        Starting at{' '}
        <span className={styles.strike}>Rs 69,999</span>
        <span className={styles.bold}>Rs 47,999.</span>{' '}
        Hurry! Offer ends soon.
      </p>
    </div>
  )
}

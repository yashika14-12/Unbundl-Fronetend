import styles from './StickyBar.module.css'

export default function StickyBar() {
  return (
    <div className={styles.bar}>
      <span className={styles.label}>Ready for your perfect smile?</span>
      <div className={styles.btnRow}>
        <button className={styles.primaryBtn}>Book scan at Home</button>
        <button className={styles.outlineBtn}>Book scan at Clinic</button>
      </div>
    </div>
  )
}

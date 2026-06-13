import styles from './CloveBanner.module.css'
import { ArrowRightIcon } from '../icons/icons'

export default function CloveBanner() {
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>
        Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
      </p>
      <div className={styles.right}>
        <div className={styles.cloveLogo}>
          <span className={styles.cloveMain}>clove:)</span>
          <span className={styles.cloveSub}>DENTAL</span>
        </div>
        <a href="#clinics" className={styles.findLink}>
          Find Clinic <ArrowRightIcon size={18} color="#7C3AED" />
        </a>
      </div>
    </div>
  )
}

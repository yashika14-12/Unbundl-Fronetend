import styles from './DoctorLedSection.module.css'

const DOCTOR_IMG = 'https://picsum.photos/560/480?random=95'

export default function DoctorLedSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>We are Doctor-led, not direct-to-customers</h2>
            <p className={styles.body}>
              We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.
            </p>
            <button className={styles.callbackBtn}>Get a Callback</button>
          </div>
          <img className={styles.img} src={DOCTOR_IMG} alt="Doctor-led treatment" />
        </div>
      </div>
    </section>
  )
}

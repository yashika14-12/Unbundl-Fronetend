import styles from '../styles/WhyWhistleSection.module.css'
import FEATURES from '../data/whyWhistleFeatures.json'

export default function WhyWhistleSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Why Whistle?</h2>
        <div className={styles.grid}>
          {FEATURES.map(f => (
            <div key={f.title} className={styles.card}>
              <img className={styles.cardImg} src={f.img} alt={f.title} />
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{f.title}</p>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

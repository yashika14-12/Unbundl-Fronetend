import styles from '../styles/WhistleDifferenceSection.module.css'
import FEATURES from '../data/whistleDifferences'
import DIFFERENCE_IMG from '../assets/whistle-difference.jpg'

export default function WhistleDifferenceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.eyebrow}>The Difference</p>
            <h2 className={styles.title}>The Whistle Difference</h2>
            <div className={styles.featureList}>
              {FEATURES.map(({ Icon, title, desc }) => (
                <div key={title} className={styles.feature}>
                  <div className={styles.iconBox}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className={styles.featureTitle}>{title}</p>
                    <p className={styles.featureDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgWrap}>
            <img className={styles.img} src={DIFFERENCE_IMG} alt="Whistle dental clinic" />
          </div>
        </div>
      </div>
    </section>
  )
}

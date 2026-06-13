import styles from './ResultsSection.module.css'

const BASE = 'https://picsum.photos'

const RESULTS = [
  { concern: 'Gaps', duration: '8 months', before: `${BASE}/130/140?random=61`, after: `${BASE}/130/140?random=62` },
  { concern: 'Crooked Teeth', duration: '8 months', before: `${BASE}/130/140?random=63`, after: `${BASE}/130/140?random=64` },
  { concern: 'Open Bite', duration: '8 months', before: `${BASE}/130/140?random=65`, after: `${BASE}/130/140?random=66` },
  { concern: 'Protruding Teeth', duration: '8 months', before: `${BASE}/130/140?random=67`, after: `${BASE}/130/140?random=68` },
]

export default function ResultsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Results You'll Love</h2>
        <div className={styles.grid}>
          {RESULTS.map(r => (
            <div key={r.concern} className={styles.card}>
              <div className={styles.photos}>
                <div className={styles.photoCol}>
                  <img className={styles.photo} src={r.before} alt="Before" />
                  <p className={styles.photoLabel}>Before</p>
                </div>
                <div className={styles.photoCol}>
                  <img className={styles.photo} src={r.after} alt="After" />
                  <p className={styles.photoLabel}>After</p>
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.infoRow}>
                  <span className={styles.infoKey}>Concern</span>
                  <span className={styles.infoVal}>{r.concern}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoKey}>Treatment Duration</span>
                  <span className={styles.infoVal}>{r.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

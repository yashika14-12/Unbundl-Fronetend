import styles from './WhyWhistleSection.module.css'

const BASE = 'https://picsum.photos'

const FEATURES = [
  { img: `${BASE}/320/240?random=71`, title: 'Custom-made & invisible', desc: 'Tailored for your teeth and smile with a clear, discreet appearance.' },
  { img: `${BASE}/320/240?random=72`, title: 'Predictable results', desc: 'Advanced 3D modeling and AI-technology for precise planning and predictable results.' },
  { img: `${BASE}/320/240?random=73`, title: 'Partnership with Clove Dental', desc: 'Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.' },
  { img: `${BASE}/320/240?random=74`, title: 'Unlimited Aligners*', desc: 'Unlimited aligners and doctor consults at no extra cost.' },
]

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

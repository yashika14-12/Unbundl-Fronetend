import styles from './HowItWorksSection.module.css'

const HOW_IMG = 'https://picsum.photos/520/390?random=90'

const STEPS = [
  { num: 1, title: 'Scan', desc: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.' },
  { num: 2, title: 'Plan', desc: 'Our Orthodontists design your customized smile enhancement plan using highly advanced software.' },
  { num: 3, title: 'Fabricate', desc: 'We manufacture your custom aligners leveraging 3D printing & laser technology.' },
  { num: 4, title: 'Wear', desc: 'Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey.' },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Get your perfect smile in four simple steps</h2>
          <div className={styles.inner}>
            <div className={styles.stepsGrid}>
              {STEPS.map(({ num, title, desc }) => (
                <div key={num} className={styles.step}>
                  <div className={styles.stepNum}>{num}</div>
                  <div>
                    <p className={styles.stepTitle}>{title}</p>
                    <p className={styles.stepDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.imgWrap}>
              <img className={styles.img} src={HOW_IMG} alt="Doctor performing dental scan" />
              <button className={styles.playBtn} aria-label="Play video" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

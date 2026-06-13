import styles from './WhistleDifferenceSection.module.css'
import { RoboticIcon, VerifiedIcon, PersonIcon, DoctorIcon } from '../icons/icons'

const DIFFERENCE_IMG = 'https://picsum.photos/560/440?random=80'

const FEATURES = [
  { Icon: RoboticIcon, title: 'Precise tools & robots', desc: 'Every aligner is manufactured using robotic 3D printing for micron-level accuracy.' },
  { Icon: VerifiedIcon, title: 'Professionally done', desc: 'Clinical-grade treatment, not DIY kits. Your safety is our non-negotiable.' },
  { Icon: PersonIcon, title: 'Personalized DR Clinic visits', desc: 'Regular in-clinic reviews to ensure your treatment stays on track.' },
  { Icon: DoctorIcon, title: 'Doctor-led, start to finish', desc: 'Licensed orthodontists design, supervise, and approve every treatment plan.' },
]

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

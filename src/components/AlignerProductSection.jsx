import styles from './AlignerProductSection.module.css'
import { StarIcon, ArrowRightIcon } from '../icons/icons'

const PRODUCT_IMG = 'https://picsum.photos/400/220?random=55'

export default function AlignerProductSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.badge}>WHISTLE ALIGNERS</span>
            <h2 className={styles.title}>
              Dream smiles<br />
              achieved <span className={styles.italic}>secretly</span>
            </h2>
            <p className={styles.body}>
              Our nearly-invisible aligners let you transform your smile without anyone noticing. Custom-crafted using 3D scanning technology and guided by certified orthodontists every step of the way.
            </p>
            <p className={styles.body}>
              Comfortable, removable, and proven effective — Whistle aligners are designed to fit your lifestyle, not change it.
            </p>
            <button className={styles.outlineBtn}>
              Learn More <ArrowRightIcon size={16} />
            </button>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardName}>Whistle Aligners</p>
                <p className={styles.cardSub}>Custom-made clear aligners</p>
              </div>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} />)}
                <span className={styles.rating}>4.9</span>
              </div>
            </div>
            <img className={styles.cardImg} src={PRODUCT_IMG} alt="Whistle clear aligner" />
            <div className={styles.cardFooter}>
              <div>
                <p className={styles.priceLabel}>Starting at</p>
                <p className={styles.price}>₹1,999<span>/mo</span></p>
              </div>
              <button className={styles.filledBtn}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

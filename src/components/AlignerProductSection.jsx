import styles from '../styles/AlignerProductSection.module.css'
import { ArrowRightIcon } from '../icons/icons'
import productImg from '../assets/aligner-product.png'

export default function AlignerProductSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.title}>
              Dream smiles<br />achieved secretly
            </h2>
            <p className={styles.body}>
              Experience the superior quality of our Whistle Aligners crafted with
              3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
              treatment by expert orthodontists at House of Clove
            </p>
            <p className={styles.body}>
              The pricing is different for every case. Cases with higher complexity
              requiring more aligners and additional time and effort
              from our dentists.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardLeft}>
                <p className={styles.cardName}>Whistle Aligners</p>
                <p className={styles.strikePrice}>₹84,000</p>
                <p className={styles.mainPrice}>
                  starting at&nbsp;&nbsp;<span className={styles.priceHighlight}>₹47,999</span>
                </p>
                <p className={styles.taxNote}>inc. of all taxes</p>
              </div>
              <img className={styles.productImg} src={productImg} alt="Whistle aligner" />
            </div>
            <hr className={styles.divider} />
            <ul className={styles.features}>
              <li className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                Offer valid for a limited time
              </li>
              <li className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                Easy financing options
              </li>
            </ul>
            <div className={styles.learnRow}>
              <a href="#" className={styles.learnLink}>
                Learn more <ArrowRightIcon size={16} color="var(--purple)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

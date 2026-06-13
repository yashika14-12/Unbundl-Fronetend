import styles from './ComparisonTable.module.css'
import { CheckCircleIcon, XCircleIcon, MinusIcon } from '../icons/icons'

const ROWS = [
  { feature: 'Painless Treatment', whistle: true, braces: false, others: true },
  { feature: 'Minimal Dining Impact', whistle: true, braces: false, others: 'partial' },
  { feature: 'Digital Design', whistle: true, braces: false, others: false },
  { feature: 'Dental Community Access', whistle: true, braces: false, others: false },
  { feature: 'Orthodontic Multi-tracking', whistle: true, braces: null, others: false },
]

function CellValue({ val }) {
  if (val === true) return <CheckCircleIcon />
  if (val === false) return <XCircleIcon />
  if (val === 'partial') return <CheckCircleIcon color="#F59E0B" />
  return <MinusIcon />
}

export default function ComparisonTable() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <div className={styles.logo}>
            <span className={styles.logoBadge}>W</span>
            <span className={styles.logoText}>whistle</span>
          </div>
          <h2 className={styles.title}>What sets Whistle apart?</h2>
          <p className={styles.subtitle}>See how we compare to traditional braces and other aligner brands.</p>
        </div>
        <div className={styles.tableWrap}>
          <div className={styles.table}>
            <div className={styles.tableHead}>
              <span className={styles.thCell}>Feature</span>
              {['Whistle', 'Traditional Braces', 'Other Aligners'].map(col => (
                <span key={col} className={`${styles.thCell} ${col === 'Whistle' ? styles.purple : ''}`}>{col}</span>
              ))}
            </div>
            {ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`${styles.tableRow} ${i % 2 === 0 ? '' : styles.even} ${i === ROWS.length - 1 ? styles.last : ''}`}
              >
                <span className={styles.rowLabel}>{row.feature}</span>
                {[row.whistle, row.braces, row.others].map((val, j) => (
                  <div key={j} className={styles.cell}>
                    <CellValue val={val} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

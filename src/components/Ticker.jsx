import styles from '../styles/Ticker.module.css'
import TICKER_ITEMS from '../data/tickerItems.json'

const ALL_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]

function TickerItem({ item }) {
  return (
    <>
      <span className={styles.dot} />
      <span className={styles.item}>
        {item.bold ? (
          <>
            <span className={styles.bold}>{item.bold}</span>
            {item.suffix}
          </>
        ) : item.text}
      </span>
    </>
  )
}

export default function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {ALL_ITEMS.map((item, i) => (
          <TickerItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

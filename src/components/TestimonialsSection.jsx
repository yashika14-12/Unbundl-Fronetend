import styles from '../styles/TestimonialsSection.module.css'
import { useFetch } from '../hooks/useFetch'

const TESTIMONIAL_PHOTOS = [
  '/images/testimonial-1.jpg',
  '/images/testimonial-2.jpg',
  '/images/testimonial-3.jpg',
  '/images/testimonial-4.jpg',
  '/images/testimonial-5.jpg',
]
const photoUrl = (i) => TESTIMONIAL_PHOTOS[i] ?? TESTIMONIAL_PHOTOS[0]

function TestimonialCard({ comment, index }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div style={{ textAlign: 'right' }}>
          <span className={styles.whistleBrand}>
            whistle<span className={styles.brandSub}>aligners</span>
          </span>
        </div>
      </div>
      <img className={styles.photo} src={photoUrl(index)} alt={comment.name} />
      <div className={styles.cardBottom}>
        <p className={styles.happyLabel}>HAPPY- MONIALS</p>
        <p className={styles.byLine}>BY {comment.name?.split(' ')[0].toUpperCase()}</p>
      </div>
    </div>
  )
}

function Spinner() {
  return (
    <div className={styles.spinnerWrap}>
      <div className={styles.spinner} />
      <p className={styles.spinnerText}>Loading testimonials…</p>
    </div>
  )
}

function ErrorState({ message, onRetry }) {
  return (
    <div className={styles.errorBox}>
      <p className={styles.errorIcon}>⚠</p>
      <p className={styles.errorMsg}>{message}</p>
      <button className={styles.retryBtn} onClick={onRetry}>Try again</button>
    </div>
  )
}

export default function TestimonialsSection() {
  const { data: comments, loading, error, retry } = useFetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=5'
  )

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Happy Smilers!</h2>

        {loading && <Spinner />}

        {error && <ErrorState message={error} onRetry={retry} />}

        {!loading && !error && (
          <div className={styles.grid}>
            {comments.map((c, i) => (
              <TestimonialCard key={c.id} comment={c} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

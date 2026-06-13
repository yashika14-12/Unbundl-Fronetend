import { useState, useEffect } from 'react'
import styles from '../styles/TestimonialsSection.module.css'

const photoUrl = (i) => `https://picsum.photos/200/200?random=${110 + i}`

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

export default function TestimonialsSection() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5', { signal: controller.signal })
        if (!res.ok) throw new Error('Failed to load')
        setComments(await res.json())
      } catch (e) {
        if (e.name !== 'AbortError') setError('Could not load testimonials.')
      } finally {
        setLoading(false)
      }
    })()
    return () => controller.abort()
  }, [])

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Happy Smilers!</h2>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.grid}>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => <div key={i} className={styles.skeleton} />)
            : comments.map((c, i) => <TestimonialCard key={c.id} comment={c} index={i} />)
          }
        </div>
      </div>
    </section>
  )
}

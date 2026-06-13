import { useState } from 'react'
import styles from '../styles/FAQSection.module.css'
import { PlusIcon, MinusIconPurple } from '../icons/icons'
import FAQS from '../data/faqs.json'

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Got Questions? <span className={styles.purple}>We've got answers.</span>
          </h2>
        </div>
        <div className={styles.list}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  className={styles.trigger}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{faq.q}</span>
                  <span className={styles.iconWrap}>
                    {isOpen
                      ? <MinusIconPurple size={18} color="#7C3AED" />
                      : <PlusIcon size={18} color="#64748B" />
                    }
                  </span>
                </button>
                {isOpen && <p className={styles.answer}>{faq.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

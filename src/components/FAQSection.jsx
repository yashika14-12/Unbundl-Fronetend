import { useState } from 'react'
import styles from './FAQSection.module.css'
import { PlusIcon, MinusIconPurple } from '../icons/icons'

const FAQS = [
  {
    q: 'What are Aligners?',
    a: 'Aligners are clear, removable plastic trays custom-made to fit your teeth. They apply gentle, continuous pressure to gradually shift your teeth into the desired position, providing a discreet alternative to traditional metal braces.',
  },
  {
    q: 'How do Aligners work?',
    a: 'Using a series of precisely calibrated trays, each worn for 1–2 weeks, aligners gradually move your teeth. You progress through each tray set under the supervision of your orthodontist, who monitors your treatment at regular clinic visits.',
  },
  {
    q: 'Can our dentist do regular teeth treatment alongside aligners?',
    a: 'Yes. Whistle aligners do not prevent you from receiving regular dental treatments such as cleanings, fillings, or whitening. Simply remove your aligners before any dental procedure and replace them afterwards.',
  },
  {
    q: 'Are there any restrictions on eating or drinking?',
    a: 'You should remove your aligners before eating or drinking anything other than plain water. This keeps them clean and prevents staining. Most patients find this easy to incorporate into their daily routine.',
  },
  {
    q: 'How long does the treatment take?',
    a: 'Treatment duration varies based on the complexity of your case. Mild corrections typically take 3–6 months, while moderate cases may take 12–18 months. Your orthodontist will give you a personalised timeline after your initial scan.',
  },
]

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

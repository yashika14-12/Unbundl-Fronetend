import { useState } from 'react'
import styles from './HeroSection.module.css'

const HERO_IMG = 'https://picsum.photos/560/380?random=42'

export default function HeroSection() {
  const [hasGap, setHasGap] = useState('')
  const [form, setForm] = useState({ name: '', phone: '' })
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Invisible Aligners for a dream smile</h1>
          <p className={styles.heroSub}>
            Book a Scan and avail a free<br />
            Orthodontist Consult{' '}
            <span className={styles.accent}>worth ₹1500</span>
          </p>
        </div>
        <img className={styles.heroImg} src={HERO_IMG} alt="Happy smile" />
      </div>

      <div className={styles.formSection}>
        <div className={styles.formInner}>
          {submitted ? (
            <div className={styles.success}>
              <p className={styles.successTitle}>✓ Booked Successfully!</p>
              <p className={styles.successSub}>Our team will contact you within 24 hours to confirm your free scan.</p>
            </div>
          ) : (
            <>
              <p className={styles.question}>Do you have Teeth Gaps or Crooked Teeth?</p>
              <div className={styles.radioGroup}>
                {['Yes', 'No'].map(opt => (
                  <label key={opt} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="hasGap"
                      value={opt}
                      checked={hasGap === opt}
                      onChange={() => setHasGap(opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  if (form.name && form.phone) setSubmitted(true)
                }}
                className={styles.formRow}
              >
                <input
                  className={styles.input}
                  placeholder="Full Name*"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
                <div className={styles.phoneWrap}>
                  <span className={styles.phonePrefix}>+91</span>
                  <input
                    type="tel"
                    placeholder="Mobile number*"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>Book a Free Scan</button>
              </form>
              <div className={styles.consentRow}>
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                />
                <label htmlFor="consent" className={styles.consentText}>
                  I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

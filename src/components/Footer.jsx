import styles from './Footer.module.css'
import { PhoneIcon, EmailIcon, InstagramIcon, FacebookIcon, TwitterXIcon } from '../icons/icons'

const NAV_LINKS = ['Home', 'Book a Free Scan', 'How it Works', 'Range of Aligners', 'Aligners vs Braces', 'FAQs']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.colTitle}>Quick Links</p>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(link => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Get in Touch Now!</p>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <PhoneIcon size={17} color="rgba(255,255,255,0.65)" />
                <a href="tel:01169328350">011-6932-8350</a>
              </li>
              <li className={styles.contactItem}>
                <EmailIcon size={17} color="rgba(255,255,255,0.65)" />
                <a href="mailto:support@whistle.in">support@whistle.in</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Follow us on</p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon size={28} color="#fff" />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FacebookIcon size={28} color="#fff" />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <TwitterXIcon size={26} color="#fff" />
              </a>
            </div>
          </div>
          <div>
            <ul className={styles.legalList}>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

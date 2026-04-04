import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <a className={styles.logo} href="/">
      <img alt="At-work logo" className={styles.icon} src="/logo-sign.png" />
      <span className={styles.text}>
        at-<strong className={styles.textBold}>work</strong>
      </span>
    </a>
  )
}

export default Logo

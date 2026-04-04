import Logo from '@/components/logo/Logo'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <Logo />
          </div>

          <div className={styles.right}>
            <div className={styles.notifications}>
              <button className={styles.iconButton}>
                <img alt="like notifications" src="/like.png" />
              </button>

              <button className={styles.iconButton}>
                <img alt="notifications" src="/bell.png" />
              </button>
            </div>

            <div className={styles.profile}>
              <img
                alt="avatar"
                className={styles.avatar}
                src="/photo-example.png"
              />
              <span className={styles.username}>Ivan1234</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header

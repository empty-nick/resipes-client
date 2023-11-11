import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.menu}>Some menu</div>
      <div className={styles.profile}>Profile</div>
    </div>
  )
}

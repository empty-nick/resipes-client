import styles from './Welcome.module.css'

export const Welcome = () => {
  return (
    <div className={styles.welcome}>
      {/* Title of the day */}
      <div className={styles.title}>
        Title
      </div>

      {/* Sub data (like creation date, last edited etc.) */}
      <div className={styles.subdata}>
        Sub data
      </div>

      {/* Block for main information */}
      <main className={styles.main}>
        Main information
      </main>
    </div>
  )
}

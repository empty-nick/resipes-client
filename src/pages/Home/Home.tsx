import styles from './Home.module.css'
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      Home Page
    </div>
  )
}
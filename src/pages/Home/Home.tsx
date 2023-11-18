import { Header } from "../../components/Header";
import { Welcome } from "../../components/Welcome";
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.content}>
      <Header />
      <Welcome />
    </div>
  )
}
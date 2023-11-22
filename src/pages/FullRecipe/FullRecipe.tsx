import styles from './FullRecipe.module.css'
import { useParams } from "react-router-dom";

export const FullRecipe = () => {
  const { id} = useParams()
  console.log(id)
  return (
    <div className={styles.content}>FullRecipe page</div>
  )
}

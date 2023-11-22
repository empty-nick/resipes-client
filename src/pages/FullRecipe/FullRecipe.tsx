import styles from './FullRecipe.module.css'
import { useParams } from "react-router-dom";
import { useGetFullRecipeQuery } from "../../store/serve/serve.api.ts";

export const FullRecipe = () => {
  const { id} = useParams()
  const {data, isLoading, isError} = useGetFullRecipeQuery(Number(id))
  console.log(id)
  console.log('data', data)
  console.log('isLoading', isLoading)
  console.log('isError', isError)
  return (
    <div className={styles.content}>FullRecipe page</div>
  )
}

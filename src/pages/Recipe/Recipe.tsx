import styles from './Recipe.module.css'
import { Card } from "../../components/Card";
import { useGetAllRecipesShortQuery } from "../../store/serve/serve.api.ts";

export const Recipe = () => {
  const { data} = useGetAllRecipesShortQuery(null)
  console.log('data', data)
  // const data = [
  //   {
  //     "recipe_id": 1,
  //     "title": "Как жёстко выебать котю?",
  //     "short_description": "он любит когда я трахаю его",
  //     "image": "http://26.158.164.189:8000/KotkaMaks"
  //   }
  // ]

  return (
    <div className={styles.content}>
      Recipe page
      <div className={styles.card}>
        {data?.map( recipe => (
          <Card
            recipe_id={recipe.recipe_id}
            image={recipe.image}
            title={recipe.title}
            short_description={recipe.short_description}
            key={recipe.recipe_id}
          />
        ))}
      </div>
    </div>
  )
}

import styles from './Recipe.module.css'
import { Card } from "../../components/Card";
import { useGetAllRecipesShortQuery } from "../../store/serve/serve.api.ts";

export const Recipe = () => {
  const { data} = useGetAllRecipesShortQuery(null)
  // console.log('data', data)
  // const data = [
  //   {
  //     "recipe_id": 1,
  //     "title": "Как жёстко выебать котю?",
  //     "short_description": "он любит когда я трахаю его",
  //     "state_recipe": true,
  //     "image": "https://www.allrecipes.com/thmb/nb2eEifCwlw1yc5gnXMwBy4BkXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23600-worlds-best-lasagna-DDMFS-2x1-1193-40ded59b2a224312b66bdafbb885adc0.jpg"
  //   }
  // ]

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        {data?.map( recipe => (
          <Card
            recipe_id={recipe.recipe_id}
            image={recipe.image}
            title={recipe.title}
            short_description={recipe.short_description}
            state_recipe={recipe.state_recipe}
            key={recipe.recipe_id}
          />
        ))}
      </div>
    </div>
  )
}

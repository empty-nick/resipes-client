import styles from './Card.module.css'
import { IRecipeShort } from "../../models/Recipe.model.ts";
import { Img } from "react-image";

export const Card = ({title, image, recipe_id, short_description}: IRecipeShort) => {
  console.log(recipe_id)
  const handleClick = () => {
    alert(`id: ${recipe_id}, length is ${short_description?.length}`)
  }
  const errorImageUrl = 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_640.png'
  return (
    <div className={styles.content}>
      <span className={styles.title}>{title}</span>
      <div className={styles.imageHandler}>
        <Img src={[image, errorImageUrl]} className={styles.image} />
      </div>
      <div className={styles.description}>
        {short_description}
      </div>
      <button onClick={handleClick}>Смотреть рецепт</button>
    </div>
  )
}

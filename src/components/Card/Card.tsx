import styles from './Card.module.css'
import { IRecipeShort } from "../../models/Recipe.model.ts";
import { Img } from "react-image";
import { TextBlock } from "../TextBlock";

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

      <TextBlock borderColor={"default"} fontSize={[20, 'px']}>
        Name: Maksim. Hello, there is some text
      </TextBlock>
      <button onClick={handleClick}>Смотреть рецепт</button>
    </div>
  )
}

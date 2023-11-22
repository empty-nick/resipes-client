import styles from './Card.module.css'
import { IRecipeShort } from "../../models/Recipe.model.ts";
import { Img } from "react-image";
import { TextBlock } from "../TextBlock";
import { Like } from "../Like/Like.tsx";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { ReactElement } from "react";

export const Card = ({title, image, recipe_id, short_description, state_recipe}: IRecipeShort): ReactElement | null => {
  const navigator = useNavigate()
  const handleClick = () => {
    navigator(`${recipe_id}`)
  }
  if (state_recipe !== 'ACTIVE')
    return null
  const errorImageUrl = 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_640.png'
  return (
    <div className={styles.content}>
      <Like recipeId={recipe_id} />
      <span className={styles.title}>{title}</span>

      <div className={styles.imageHandler}>
        <Img src={[image, errorImageUrl]} className={styles.image} />
      </div>

      <TextBlock borderColor={"default"} fontSize={[20, 'px']}>
        {short_description!}
      </TextBlock>
      <Button
        message={'Смотреть рецепт'}
        btnType={'active'}
        isActive={true}
        onClick={handleClick}
      />
    </div>
  )
}

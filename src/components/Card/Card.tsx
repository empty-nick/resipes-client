import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "react-image";
import { IRecipeShort } from "../../models/Recipe.model.ts";
import { TextBlock } from "../TextBlock";
import { Like } from "../Like";
import { Button } from "../Button";
import styles from './Card.module.css'

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
      <div className={styles.title}>
        <TextBlock borderColor={'blue'} fontSize={[22, 'px']} borderSize={[5, 'px']}>
          {title}
        </TextBlock>
      </div>
      {/*<span className={styles.title}>{title}</span>*/}

      <div className={styles.imageHandler}>
        <Img src={[image, errorImageUrl]} className={styles.image} />
      </div>

      <TextBlock borderColor={"default"} fontSize={[18, 'px']} borderSize={[3, 'px']}>
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

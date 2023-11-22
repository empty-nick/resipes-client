import { useState } from "react";
import { useAddNewRecipeToFavoritesMutation } from "../../store/serve/serve.api.ts";
import { FaHeart } from "react-icons/fa";

import styles from './Like.module.css'

type TLikeProps = {
  recipeId: number;
}

export const Like = ({ recipeId }: TLikeProps) => {
  const [isLikeActive, setLikeActive] = useState<boolean>(false)
  const [addNewRecipe, {isLoading}] = useAddNewRecipeToFavoritesMutation()
  const { active, inactive, content, like } = styles
  const toggleLike = async () => {
    try {
      await addNewRecipe(recipeId)
      if (!isLoading)
        setLikeActive(prevState => !prevState)
    } catch (e) {
      console.log(`We found an Error :(`, e)
    }
  }
  return (
    <div className={content} onClick={toggleLike}>
      <FaHeart className={`${like} ${isLikeActive ? inactive : active}`} />
    </div>
  )
}

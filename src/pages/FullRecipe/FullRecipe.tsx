import { useEffect, useState } from "react";
import { Img } from "react-image";
import { useParams } from "react-router-dom";
import { useGetFullRecipeQuery, useGetReactionsQuery } from "../../store/serve/serve.api.ts";
import { TextBlock } from "../../components/TextBlock";
import { TReactions } from "../../models/Recipe.model.ts";
import styles from './FullRecipe.module.css'

export const FullRecipe = () => {
  const { id} = useParams()
  const [reactions, setReactions] = useState<TReactions>({like: 0, dislike: 0})
  const reaction = useGetReactionsQuery(Number(id))
  const {data} = useGetFullRecipeQuery(Number(id))
  useEffect(() => {
    if (reaction?.data)
      setReactions(reaction.data)
  }, [reactions, reaction]);
  // console.log(reactions)
  // console.log(data, isLoading, isError)
  const errorImageUrl = 'https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_640.png'
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <div className={styles.imageHandler}>
          <Img src={[data! && data?.image, errorImageUrl]} className={styles.image} />
        </div>
        <div className={styles.shortDescription}>
          {data && data?.short_description}
        </div>
        <div className={styles.likes}>
          likes: {reactions.like} | dislikes: {reactions.dislike}
        </div>
        <div className={styles.ingridients}>
          ing
        </div>

        <div className={styles.description}>
          {data && data.description}
        </div>
        <div className={styles.stagesMap}>
          {data && data.stages.map( stage => (
            <TextBlock borderColor={'purple'} borderSize={[5, 'px']} fontSize={[20, 'px']} key={stage.id}>{stage.step}</TextBlock>
          ))}
        </div>

        <div className={styles.stages}>
          {data && data.stages.map(stage => (
            <TextBlock borderColor={'purple'} borderSize={[5, 'px']} fontSize={[20, 'px']} key={stage.id}>
              <TextBlock borderColor={'red'} borderSize={[3, 'px']} fontSize={[22,'px']}>{stage.step}</TextBlock>
              <TextBlock borderColor={'blue'} borderSize={[3, 'px']} fontSize={[18,'px']}>{stage.recipe_text}</TextBlock>
            </TextBlock>
          ))}
        </div>
      </div>
    </div>
  )
}

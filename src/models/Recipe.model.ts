export interface IRecipeModal {
  recipe_id: number;
  user_id: number;
  title: string;
  description: string;
  recipe: IRecipe[]
}

export interface IRecipe{
  stage_name: string;
  image?: string;
  stage_description: string;
}
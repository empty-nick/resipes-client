export type RecipeStatus = 'ACTIVE' | 'HIDE_BY_USER' | 'HIDE_BY_ADMIN'

export interface IRecipeShort {
  recipe_id: number;
  image: string;
  title: string;
  state_recipe: RecipeStatus;
  short_description?: string;
}

export interface IIngredients {
  name: string;
  quantity: string;
  unit_dimensions: string;
}

export interface IStage {
  id: number;
  step: string;
  image: string;
  recipe_text: string;
}

export interface IRecipeFull extends IRecipeShort {
  stages: IStage[];
  ingredients: IIngredients[];
  description: string;
  created_at: string;
  updated_at: string;
  user_id: number;
}

export type RecipeStatus = 'ACTIVE' | 'HIDE_BY_USER' | 'HIDE_BY_ADMIN'

export interface IRecipeShort {
  recipe_id: number;
  image: string;
  title: string;
  short_description?: string;
}

export interface IStage {
  id: number;
  step: string;
  image: string;
  recipe_text: string;
  recipe_id: number;
}

export interface IRecipeFull extends IRecipeShort {
  "stages": IStage[];
  "description": string;
  "created_at": string;
  "updated_at": string;
  "state_recipe": RecipeStatus;
  "user_id": number;
}

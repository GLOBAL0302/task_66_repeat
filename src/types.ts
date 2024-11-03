export interface MealMutationState {
  mealTime: string;
  mealDescription: string;
  mealCalories: string;
}

export interface MealPlansState extends MealMutationState {
  id: string;
}

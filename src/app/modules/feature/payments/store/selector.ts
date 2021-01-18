import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICardState } from ".";

const getCardsState = createFeatureSelector<ICardState>("payments");

export const allUsers = createSelector(getCardsState, (state: ICardState) => {
  return state;
});

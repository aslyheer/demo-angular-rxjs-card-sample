import { ICard } from "src/app/modules/core/models/card.model";
import { Action } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";

export enum CardActionTypes {
  GetCardLoad = "[Card] Get Card",
  GetCardSuccess = "[Card] Get Card Success",
  GetCardFail = "[Card] Get Card Fail",
  PostCard = "[Card] Post Card",
  PostCardSuccess = "[Card] Post Card Success",
  PostCardFail = "[Card] Post Card Fail",
}

export class GetCardLoad implements Action {
  public readonly type = CardActionTypes.GetCardLoad;
}

export class GetCardSuccess implements Action {
  public readonly type = CardActionTypes.GetCardSuccess;

  constructor(public payload: ICard[]) {}
}

export class GetCardFail implements Action {
  public readonly type = CardActionTypes.GetCardFail;

  constructor(public error: HttpErrorResponse) {}
}

export class PostCard implements Action {
  public readonly type = CardActionTypes.PostCard;

  constructor(public payload: ICard) {}
}

export class PostCardSuccess implements Action {
  public readonly type = CardActionTypes.PostCardSuccess;

  constructor(public payload: ICard) {}
}

export class PostCardFail implements Action {
  public readonly type = CardActionTypes.PostCardFail;

  constructor(public error: HttpErrorResponse) {}
}

export type CardActions =
  | GetCardLoad
  | GetCardSuccess
  | GetCardFail
  | PostCard
  | PostCardSuccess
  | PostCardFail;

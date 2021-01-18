import { ICard } from "src/app/modules/core/models/card.model";
import { PaymentService } from "./../../../core/services/payment.service";

import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import * as fromCard from ".";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private paymentService: PaymentService
  ) {}

  @Effect()
  getCards$: Observable<Action> = this.actions$.pipe(
    ofType(fromCard.CardActionTypes.GetCardLoad),
    mergeMap(() =>
      this.paymentService.list().pipe(
        map((card: ICard[]) => {
          return new fromCard.GetCardSuccess(card);
        }),
        catchError((error) => of(new fromCard.GetCardFail(error)))
      )
    )
  );

  @Effect()
  postCard$: Observable<Action> = this.actions$.pipe(
    ofType(fromCard.CardActionTypes.PostCard),
    map((action: fromCard.PostCard) => action.payload),
    mergeMap((card: ICard) =>
      this.paymentService.add(card).pipe(
        map((card: ICard) => {
          return new fromCard.PostCardSuccess(card);
        }),
        catchError((error) => of(new fromCard.PostCardFail(error)))
      )
    )
  );
}

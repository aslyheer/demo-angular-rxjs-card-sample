import { MESSAGES } from "./../../../core/constants/messages.constant";
import { PaymentService } from "./../../../core/services/payment.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as fromCards from "../store";
import { ICard } from "src/app/modules/core/models/card.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list-card",
  templateUrl: "./list-card.component.html",
  styleUrls: ["./list-card.component.scss"],
})
export class ListCardComponent implements OnInit, OnDestroy {
  public allCards: ICard[] = [];
  public subscription: Subscription;
  public messages = MESSAGES.PAYMENT_MODULE;
  init() {
    this.getCards();
  }
  /**
   * It listen for the cards
   */
  getCards() {
    this._store.dispatch(new fromCards.GetCardLoad());
    const cards$ = this._store.pipe(select(fromCards.allUsers));
    this.subscription = cards$.subscribe((res) => {
      this.allCards = res.data;
    });
  }

  ngOnInit(): void {
    this.init();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  constructor(
    private _paymentService: PaymentService,
    private _store: Store<fromCards.ICardState>
  ) {}
}

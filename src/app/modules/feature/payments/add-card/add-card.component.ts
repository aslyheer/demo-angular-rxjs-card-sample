import { MESSAGES } from "./../../../core/constants/messages.constant";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import * as fromCards from "../store";

@Component({
  selector: "app-add-card",
  templateUrl: "./add-card.component.html",
  styleUrls: ["./add-card.component.scss"],
})
export class AddCardComponent implements OnInit {
  public paymentForm: FormGroup;
  public displayMessage: string;
  init() {
    this.buildForm();
  }
  /**
   * It setup the form
   */
  buildForm() {
    this.paymentForm = this.formBuilder.group({
      nameOnCard: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern("^[A-Za-z][A-Za-z -]*$"),
        ],
      ],
      cardNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(16),
          Validators.min(1111111111111111),
          Validators.max(9999999999999999),
        ],
      ],
      expirationMonth: [
        "",
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(2),
          Validators.min(1),
          Validators.max(12),
        ],
      ],
      expirationYear: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.min(1111),
          Validators.max(9999),
        ],
      ],
      cardCVVNumber: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.min(111),
          Validators.max(999),
        ],
      ],
      amount: ["", [Validators.required, Validators.min(1)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.paymentForm.controls;
  }

  /**
   * It trigger on submit of form
   */
  onSubmit() {
    if (this.paymentForm.invalid) {
      this.displayMessage = MESSAGES.PAYMENT_MODULE.paymentError;
      return;
    }
    this.resetForm();
  }

  /**
   * It empty the displayMessage variable and reset the form
   */
  resetForm() {
    this._store.dispatch(new fromCards.PostCard(this.paymentForm.value));
    this.paymentForm.reset();
    this.displayMessage = MESSAGES.PAYMENT_MODULE.paymentSuccess;
    setTimeout(() => {
      this._router.navigate(["/"]);
    }, 1000);
  }
  ngOnInit() {
    this.init();
  }

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<fromCards.ICardState>,
    private _router: Router
  ) {}
}

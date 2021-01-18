import { PaymentService } from "./modules/core/services/payment.service";
import { PaymentsModule } from "./modules/feature/payments/payments.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducer } from "./modules/feature/payments/store";
import { UserEffects } from "./modules/feature/payments/store/effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaymentsModule,
    StoreModule.forRoot({ payments: reducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
    HttpClientModule,
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent],
})
export class AppModule {}

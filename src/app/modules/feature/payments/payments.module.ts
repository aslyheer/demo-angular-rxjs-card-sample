import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymentsRoutingModule } from "./payments-routing.module";
import { PaymentsComponent } from "./payments.component";
import { AddCardComponent } from "./add-card/add-card.component";
import { ListCardComponent } from "./list-cards/list-card.component";

@NgModule({
  declarations: [PaymentsComponent, AddCardComponent, ListCardComponent],
  imports: [CommonModule, PaymentsRoutingModule, SharedModule],
  exports: [ListCardComponent],
})
export class PaymentsModule {}

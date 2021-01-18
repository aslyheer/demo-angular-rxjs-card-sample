import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCardComponent } from "./add-card/add-card.component";
import { ListCardComponent } from "./list-cards/list-card.component";

const routes: Routes = [
  {
    path: "add-card",
    component: AddCardComponent,
  },
  {
    path: "list-card",
    component: ListCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}

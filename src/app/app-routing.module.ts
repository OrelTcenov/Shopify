import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTableComponent } from './order-table/order-table.component';
import { LineItemsComponent } from './line-items/line-items.component';

const routes: Routes = [
  { path: '', component: OrderTableComponent },
  { path: 'LineItems', component: LineItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

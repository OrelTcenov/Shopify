import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderTableComponent } from './order-table/order-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LineItemsComponent } from './line-items/line-items.component';

@NgModule({
  declarations: [AppComponent, OrderTableComponent, LineItemsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

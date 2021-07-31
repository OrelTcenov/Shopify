import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css'],
})
export class OrderTableComponent implements OnInit {
  orders;
  page = 1;
  pageSize = 10;
  collectionSize: number;
  currentRate = 8;

  constructor(private service: ServerService, private router: Router) {}

  ngOnInit(): void {
    this.service.getOrder().subscribe(
      (data) => {
        this.collectionSize = data['orders'].length;
        this.orders = data['orders'];
      },
      (err) => console.log(err)
    );
  }

  lineItems(order) {
    this.router.navigate(['/LineItems'], {
      state: { lineItems: order.line_items },
    });
  }
}

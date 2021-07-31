import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopify';
  constructor(private service: ServerService) {}

  ngOnInit() {
    var order = {
      customer: {
        first_name: 'Customer',
        last_name: 'Cust',
      },
      total_price: '199',
      line_items: [
        {
          title: 'IPod Touch 8GB',
          price: '199',
        },
      ],
    };

    this.service.CreateOrder(order).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}

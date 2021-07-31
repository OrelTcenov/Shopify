import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: ['./line-items.component.css'],
})
export class LineItemsComponent implements OnInit {
  lineItems;
  constructor(private router: Router) {
    try {
      this.lineItems =
        this.router.getCurrentNavigation().extras.state.lineItems;
    } catch {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}
}

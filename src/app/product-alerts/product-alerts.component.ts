import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // import input and product will throw an unused exception until we add this @input
  //The @Input() decorator indicates that the property value passes in from the component's //parent, ProductListComponent
  @Input() product!: Product;

  constructor() {}

  ngOnInit() {}
}

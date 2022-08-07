import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductListComponent implements OnInit {
  products$ : any;
  constructor(public product: ProductDataService) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      this.products$ = data;
      console.log(this.products$);
      console.log(data);
    });
  }

  
}


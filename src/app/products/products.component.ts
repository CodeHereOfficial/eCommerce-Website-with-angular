import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from './product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductListComponent implements OnInit {
  products : Array<Product>;

  constructor(private product: ProductDataService,
    private router : Router) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      // const { products } : any = data ; destruction syntax
      this.products = (data as any).products;   //converting object into array of products
      console.log(this.products);
      console.log(data);
    });
  }
  // getDetails(product) {
  //   this.router.navigate(['/products',this.products.id])

  // }
  
}


import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private product: ProductDataService, private router: Router) {}

  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      // const { products } : any = data ; destruction syntax
      this.products = (data as any).products; //converting object into array of products
      console.log(this.products);
      console.log(data);
    });
  }

  getProductDetails(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/product', product.id]);
  }
}

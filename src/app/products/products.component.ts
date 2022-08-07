
import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';


export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public brand: string,
    public category: string,
    public thumbnail: any,
    public images: any
  ) {}
}

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private product : ProductDataService) {
    this.product.getProducts().subscribe((data:any[])=>{
this.products = data;
console.log(data)
    });
  }

  ngOnInit(): void {
    
  }

  
}

import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];
  breakpoint: number;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent | undefined;

  constructor(private product: ProductDataService, private router: Router) {}

  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      // const { products } : any = data ; destruction syntax
      this.products = (data as any).products; //converting object into array of products
      console.log(this.products);
      console.log(data);
    });

    this.breakpoint = window.innerWidth <= 400 ? 1 : 4;
  }



  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 4;
  }

  paginateProducts(limit?: number, skip?: number, filter?: string) {
    let productApiUrl: string;
    if (limit && !skip) {
      productApiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}`;
    } else if (skip && !limit) {
      productApiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}?skip=${skip}`;
    } else if (limit && skip) {
      productApiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}?limit=${limit}&skip=${skip}`;
    } else {
      productApiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}`;
    }

    this.http.get(productApiUrl).subscribe((data) => {
      this.products = (data as any).products;
      this.length = (data as any).total;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  onPagination(event: PageEvent) {
    this.pageEvent = event;
    let skip: number = event.pageSize * event.pageIndex;

    this.paginateProducts(event.pageSize, event.pageSize * event.pageIndex);
  }


  getProductDetails(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/product', product.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product: Product | any = '';
  id: number | string = '';
  productForm: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
    this.initialize();
  }

  initialize() {
    this.initializeForm(this.product);
  }

  initializeForm(product: any) {
    this.productForm = this.formBuilder.group({
      title: [product.title, Validators.required],
      description: [product.description, [Validators.required]],
      category: [product.category, Validators.required],
      price: [product.price, Validators.required],
      brand: [product.brand, Validators.required],
      stock: [product.stock, Validators.required],
      rating: [product.rating, Validators.compose([Validators.required, Validators.max(10)])],
    });
  }

  knowProduct(id: number): any {
    this.http
      .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;

        console.log(data);
      });
  }
  onSubmit(formData: any, isValid: boolean) {
    if (isValid) {
      this.http.put(
        `${environment.apiEndpoint}${appConstant.apiRoute.products}/${this.id}`,
        formData
      );
    }
  }
  getDetails(id: number) {
    this.http
      .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        this.initializeForm(data);
      });
  }
}

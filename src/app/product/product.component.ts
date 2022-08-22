import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { appConstant } from '../app.constant';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';

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
    // private http: HttpClient,
    // private formBuilder: FormBuilder,
    private apiService: ApiService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
    // this.initialize();
  }

  get appConstant() {
    return appConstant;
  }
  initialize() {
    this.initializeForm(this.product);
  }

  initializeForm(product: any) {
    this.productForm = this.commonService.createProductForm(product);
  }

  onSubmit(formData: any, isValid: boolean) {
    if (isValid) {
      console.log(formData);
      this.apiService
        .httpPut(`${appConstant.apiRoute.products}/${this.id}`, formData)
        .subscribe(
          (data) => {
            console.log('data updated');
            console.log(data);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
  getDetails(id: number) {
    this.apiService
      .httpGet(`${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        this.initializeForm(data);
        console.log(data);
      });
  }

  // productUpdate(event: boolean) {
  //   if (!(event as any).target) {
  //     this.showMessage = event;
  //   }
  // }

  //   showMessage(event: boolean) {}
}

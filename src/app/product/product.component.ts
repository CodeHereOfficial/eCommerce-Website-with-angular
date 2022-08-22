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
  showMessage: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
  }

  get appConstant() {
    return appConstant;
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
        console.log(data);
      });
  }

  productUpdate(event: boolean) {
    if (!(event as any).target) {
      this.showMessage = event;
    }
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { appConstant } from '../../app.constant';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: any;
  id: number | string = '';

  @Input() product: string | undefined;

  constructor(
  
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.initializeForm(this.product);
    }
  }

  get appConstant() {
    return appConstant;
  }

  initializeForm(product: any) {
    this.productForm = this.commonService.createProductForm(product);
  }
  onSubmit(formData: any, isValid: boolean) {
    console.log(formData);
  }
}

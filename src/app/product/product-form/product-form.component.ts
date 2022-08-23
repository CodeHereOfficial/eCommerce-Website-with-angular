import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { appConstant } from '../../app.constant';
import { CommonService } from '../../services/common.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: any;
  id: number | string = '';

  @Input() product: string | undefined;
  @Output() submit: EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    private apiService: ApiService,
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
    if (isValid) {
      this.apiService
        .httpPut(`${appConstant.apiRoute.products}/${this.id}`, formData)
        .subscribe(
          (data) => {
            this.submit.emit(true);
          },
          (err) => {}
        );
    }
  }
}

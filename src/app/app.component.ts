import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    'https://thumbs.dreamstime.com/b/little-girl-pointing-something-family-shopping-parents-daughter-copy-space-holding-shopper-bags-yellow-studio-156232563.jpg',
    'https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=2000',
    'https://cdn11.bigcommerce.com/s-7z9nkigk30/product_images/uploaded_images/getting-mini.png?t=1601916808&_ga=2.84628057.1959320340.1601915546-1542306807.1592319001',
  ];
}

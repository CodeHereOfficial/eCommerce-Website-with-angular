import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import {MatGridListModule} from '@angular/material/grid-list';

// import {ProductListComponent} from './products.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, MatCardModule, MatButtonModule, MatDividerModule, MatProgressBarModule, MatGridListModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

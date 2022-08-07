import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  mediaSub: Subscription;
  deviceXs : boolean;

  constructor( public meadiaObserver : MediaObserver){}

  ngOnInit (){
this.mediaSub = this.meadiaObserver.media$.subscribe(
  (result: MediaChange) => {
    console.log(result.mqAlias);
    this.deviceXs = result.mqAlias === 'xs' ? true : false;
  }
);
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}


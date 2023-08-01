import { Component } from '@angular/core';
import { DataService } from './services/data.service';

declare var SpatialNavigation: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tvapp';

  constructor() {
  }

  ngOnInit() {
    SpatialNavigation.init();

    SpatialNavigation.add({
      selector: '.focusable'
    });

    SpatialNavigation.makeFocusable();
  }
}
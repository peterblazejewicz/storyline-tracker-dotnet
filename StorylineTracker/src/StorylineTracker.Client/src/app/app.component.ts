import { Component, AfterViewInit } from '@angular/core';
declare var componentHandler: any;
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'Storyline Tracker';

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

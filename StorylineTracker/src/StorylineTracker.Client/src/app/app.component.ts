import { Component, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare var componentHandler: any;
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent implements AfterViewInit {
  title = 'Storyline Tracker';

  public menuItems = [
    { caption: 'Dashboard', link: ['/'] },
    { caption: 'Characters', link: ['/characters'] },
    { caption: 'Vehicles', link: ['/vehicles'] }
  ];

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import * as mdl from 'mdl';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, ModalComponent],
  providers: [ModalService]
})

export class AppComponent implements AfterViewInit {
  title = 'Storyline Tracker';

  public menuItems = [
    { caption: 'Dashboard', link: ['/'] },
    { caption: 'Characters', link: ['/characters'] },
    { caption: 'Vehicles', link: ['/vehicles'] }
  ];

  constructor(private modalService: ModalService) { }

  ngAfterViewInit() {
    mdl.componentHandler.upgradeDom();
  }

  resetDb(e: Event) {
    console.log(this.modalService);
    let msg = 'Are you sure you want to reset the database?';
    this.modalService.activate(msg).then(response => {
      // TBD if(true) ...
    });
  }
}

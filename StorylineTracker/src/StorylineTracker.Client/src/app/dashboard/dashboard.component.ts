import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Character } from '../characters/character';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: Observable<Character[]>;
  constructor() {}

  ngOnInit() {
  }

  getCharacters() {

  }

}

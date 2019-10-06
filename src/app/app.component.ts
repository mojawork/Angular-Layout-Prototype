import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {GridcardsInterface} from '../data/gridcards.interface';
import {LayoutService} from './utils/layout/layout.service';
import {LayoutStatusInterface} from './utils/layout/layout.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'layout';
  public datagridcards: GridcardsInterface[] | null = null;

  constructor(
    private store: Store,
    private layoutService: LayoutService
  ) {
  }

  ngOnInit() {
    this.store.subscribe((response) => {
      this.datagridcards = response.appstate.datagridcards;
    });




  }

}

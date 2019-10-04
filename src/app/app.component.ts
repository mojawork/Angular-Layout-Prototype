import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {DataGridCards} from './app.state';
import {GridcardsInterface} from '../data/gridcards.interface';
import {GridcardsTest} from '../data/gridcrads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'layout';
  public datagridcards: GridcardsInterface[] | null = null;



  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.subscribe((response) => {
      this.datagridcards = response.appstate.datagridcards;
    });
  }

}

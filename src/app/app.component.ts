import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {GridcardsInterface} from './components/gridcards/gridcards.interface';
import {GridcardsTest} from '../data/data';
import {DataGridCards} from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'layout';
  public datagridcards: GridcardsInterface[] | null = null;

  public test = GridcardsTest;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.subscribe((response) => {
      this.datagridcards = response.appstate.datagridcards;
    });

    this.store.dispatch(
      new DataGridCards(this.test)
    );
  }

}

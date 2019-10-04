import {Component, Input, OnInit} from '@angular/core';
import {GridcardsInterface} from '../../../../data/gridcards.interface';
import {GridcardsTest} from '../../../../data/gridcrads';
import {Store} from '@ngxs/store';
import {DataGridCards} from '../../../app.state';

@Component({
  selector: 'app-gridcards-form',
  templateUrl: './gridcards-form.component.html',
  styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit {

  public test = GridcardsTest;

  @Input() public options: GridcardsInterface;

  public updateGridData(): void {

    this.store.dispatch(
      new DataGridCards(this.test)
    );

  }

  constructor(private store: Store) {}

  ngOnInit() {

    console.log(this.options);




  }
}

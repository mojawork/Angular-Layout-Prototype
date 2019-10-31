import {Component, Input, OnInit} from '@angular/core';
import {LayoutService} from '../../../utils/layout/layout.service';
import {Store} from '@ngxs/store';
import {DataGridCardTemp} from '../../../app.state';
import {GirdCardColumTypeInterface, GridcardsInterface} from '../../../../data';

@Component({
  selector: 'app-gridcards-view',
  templateUrl: './gridcards-view.component.html',
  styleUrls: ['./gridcards-view.component.scss']
})
export class GridcardsViewComponent implements OnInit {

  public color = true;
  @Input() public datagridcards: GridcardsInterface [];

  constructor(
    private store: Store,
    private layoutService: LayoutService
  ) {
  }

  public gridTemplateColums(datagridcard: GridcardsInterface) {

    let colums = '1fr';
    for (let i = 0; i < (parseFloat(datagridcard.columns.value) - 1); i++) {
      colums = `${colums}  1fr`;
    }
    return {'grid-template-columns': colums};
  }

  public gridColumcard(datagridcard: GridcardsInterface, type: GirdCardColumTypeInterface) {

    if (datagridcard.cardColumn && type.first) {
      return {'grid-column': 'span ' + parseFloat(datagridcard.cardColumn.first.value)};
    }
    if (datagridcard.cardColumn && type.even && !type.first && !type.last) {
      return {'grid-column': 'span ' + parseFloat(datagridcard.cardColumn.even.value)};
    }
    if (datagridcard.cardColumn && type.odd && !type.first && !type.last) {
      return {'grid-column': 'span ' + parseFloat(datagridcard.cardColumn.odd.value)};
    }
    if (datagridcard.cardColumn && type.last) {
      return {'grid-column': 'span ' + parseFloat(datagridcard.cardColumn.last.value)};
    }
    return {'grid-column': 'span 1'};
  }

  public gridColumHeaderFooter(datagridcard: GridcardsInterface) {
    return {'grid-column': 'span ' + parseFloat(datagridcard.columns.value)};
  }

  public setGridCardForm(datagridcard: GridcardsInterface) {
    this.store.dispatch( new DataGridCardTemp (datagridcard));
  }


  ngOnInit() {

  }

}

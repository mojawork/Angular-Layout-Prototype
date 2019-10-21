import {Component, Input, OnInit} from '@angular/core';
import {GirdCardColumTypeInterface, GridcardsInterface} from '../../../../data/gridcards.interface';
import {LayoutService} from '../../../utils/layout/layout.service';

@Component({
  selector: 'app-gridcards-view',
  templateUrl: './gridcards-view.component.html',
  styleUrls: ['./gridcards-view.component.scss']
})
export class GridcardsViewComponent implements OnInit {

  public color = true;
  @Input() public options: GridcardsInterface;

  constructor(
    private layoutService: LayoutService
  ) {
  }


  public gridTemplateColums() {
    let colums = '1fr';
    for (let i = 0; i < (parseFloat(this.options.colums.value) - 1); i++) {
      colums = `${colums}  1fr`;
    }
    return {'grid-template-columns': colums};
  }

  public gridColumcard(type: GirdCardColumTypeInterface) {
    if (this.options.cardColumn && type.first) {
      return {'grid-column': 'span ' + parseFloat(this.options.cardColumn.first.value)};
    }
    if (this.options.cardColumn && type.even && !type.first && !type.last) {
      return {'grid-column': 'span ' + parseFloat(this.options.cardColumn.even.value)};
    }
    if (this.options.cardColumn && type.odd && !type.first && !type.last) {
      return {'grid-column': 'span ' + parseFloat(this.options.cardColumn.odd.value)};
    }
    if (this.options.cardColumn && type.last) {
      return {'grid-column': 'span ' + parseFloat(this.options.cardColumn.last.value)};
    }
    return {'grid-column': 'span 1'};

  }

  public gridColumHeaderFooter() {
    return {'grid-column': 'span ' + parseFloat(this.options.colums.value)};
  }


  ngOnInit() {

  }

}

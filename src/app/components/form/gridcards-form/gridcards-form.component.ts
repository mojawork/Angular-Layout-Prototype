import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {GridcardsInterface} from '../../../../data/gridcards.interface';
import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IGridcardsFormControlNames} from './gridcards-form.interface';
import {LayoutService} from '../../../utils/layout/layout.service';

@Component({
  selector: 'app-gridcards-form',
  templateUrl: './gridcards-form.component.html',
  styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit, AfterViewInit {

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private layoutService: LayoutService) {
  }

  @Input() public options: GridcardsInterface [];

  public formgroups: FormGroup  [] = [];

  public validateCardColums(colums: string, cardColumValue: string): string {
    if (parseFloat(colums) < parseFloat(cardColumValue)) {
      return colums;
    }
    return cardColumValue;
  }

  public addFromGrpup(): void {
    this.options.forEach((option) => {
      const formGroup: IGridcardsFormControlNames = {
        id: option.id,
        colums: option.colums.value,
        cardColumnFirst: option.cardColumn.first.value,
        cardColumnEven: option.cardColumn.even.value,
        cardColumnOdd: option.cardColumn.odd.value,
        cardColumnLast: option.cardColumn.last.value
      };

      this.formgroups.push(this.formBuilder.group(formGroup)
      );
    });
  }

  public dataMapper(id): void {
    this.store.subscribe((response) => {
      const gridData = response.appstate.datagridcards.find(
        (result) => {
          if (id === result.id) {
            return result;
          }
        }
      );

      const formValue: IGridcardsFormControlNames = this.store.snapshot()[id].model;

      gridData.colums.value = formValue.colums;
      gridData.cardColumn.first.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnFirst);
      gridData.cardColumn.odd.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnOdd);
      gridData.cardColumn.even.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnEven);
      gridData.cardColumn.last.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnLast);
    });
  }

  public onSubmit(id) {
    console.log(id);
  }

  ngOnInit() {
    this.addFromGrpup();
  }

  ngAfterViewInit() {
    this.options.forEach((option) => {
      this.dataMapper(option.id);
    });
  }

}

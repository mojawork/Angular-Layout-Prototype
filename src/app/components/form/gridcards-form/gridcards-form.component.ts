import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {GridcardsInterface} from '../../../../data/gridcards.interface';
import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EGridcardsInputNames, IGridcardsFormControlNames} from './gridcards-form.interface';
import {LayoutService} from '../../../utils/layout/layout.service';
import {EThemes} from '../../../app.interface';

@Component({
  selector: 'app-gridcards-form',
  templateUrl: './gridcards-form.component.html',
  styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit, AfterViewInit {

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private layoutService: LayoutService,
  ) {
  }

  @Input() public options: GridcardsInterface [];

  public formgroups: FormGroup  [] = [];
  public themes = EThemes;

  public dataGridCards: GridcardsInterface[];

  public validateCardColums(colums: string, cardColumValue: string): string {
    if (parseFloat(colums) < parseFloat(cardColumValue)) {
      return colums;
    }
    return cardColumValue;
  }

  public addFromGrpup(): void {
    this.dataGridCards.forEach((option) => {
      const formGroup: IGridcardsFormControlNames = {
        id: option.id,
        [EGridcardsInputNames.theme]: option.theme ? option.theme.selected : null, // EThemes.Dark,
        [EGridcardsInputNames.colums]: option.colums.value,
        [EGridcardsInputNames.cardColumnFirst]: option.cardColumn.first.value,
        [EGridcardsInputNames.cardColumnEven]: option.cardColumn.even.value,
        [EGridcardsInputNames.cardColumnOdd]: option.cardColumn.odd.value,
        [EGridcardsInputNames.cardColumnLast]: option.cardColumn.last.value
      };
      this.formgroups.push(this.formBuilder.group(formGroup)
      );
    });
  }


  public getDataGridcards(id: string, response: GridcardsInterface[]): GridcardsInterface {
    console.log(id);
    return response.find(
      (result) => {
        if (id === result.id) {
          return result;
        }
      });
  }

  public addTheme(id: string): void {

    const gridData = this.getDataGridcards(id, this.dataGridCards);
    if (!gridData.theme) {
      gridData.theme = this.store.snapshot().appstate.datagridcardsdefault.theme;
    } else {
      gridData.theme = null;
    }
  }

  public dataMapper(): void {

    // this.store.subscribe((response) => {
    this.dataGridCards.forEach((dataGridCard) => {

    if (this.store.snapshot()[dataGridCard.id]) {

        // const formValue: IGridcardsFormControlNames = this.store.snapshot()[id].model;
        const gridData = this.getDataGridcards(dataGridCard.id, this.dataGridCards);
        const formValue = this.store.selectSnapshot<any>((state: any) => state[dataGridCard.id].model);

        if (gridData.theme) {
          gridData.theme.selected = formValue[EGridcardsInputNames.theme];
          console.log(dataGridCard.id , formValue.id, gridData.theme.selected, formValue[EGridcardsInputNames.theme]);
        }
        gridData.colums.value = formValue.colums;
        gridData.cardColumn.first.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnFirst);
        gridData.cardColumn.odd.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnOdd);
        gridData.cardColumn.even.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnEven);
        gridData.cardColumn.last.value = this.validateCardColums(gridData.colums.value, formValue.cardColumnLast);

        // console.log('response', response[id].model);
       }

    });
    // });
  }

  public onSubmit(id) {
    console.log(id);
  }

  ngOnInit() {

    this.store.subscribe((response) => {
      this.dataGridCards = response.appstate.datagridcards;
//       this.dataGridCards.forEach((option) => {
        // this.dataMapper(option.id);
//      });

      this.dataMapper();

    });

    this.addFromGrpup();




    // this.test(this.options[0].id);

  }

  ngAfterViewInit() {



  }

}

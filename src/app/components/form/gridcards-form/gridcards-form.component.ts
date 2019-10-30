import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GridcardsInterface} from '../../../../data/gridcards.interface';
import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EGridcardsInputNames, IGridcardsFormControlNames} from './gridcards-form.interface';
import {LayoutService} from '../../../utils/layout/layout.service';
import {EThemes} from '../../../app.interface';
import {DataThemeDefault2} from '../../../../data/gridcradsdefaults';


@Component({
  selector: 'app-gridcards-form',
  templateUrl: './gridcards-form.component.html',
  styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private layoutService: LayoutService,
  ) {
  }

  public dataGridCard: GridcardsInterface | null = null;
  public formgroupGridCard: FormGroup;
  public themeGridCard = EThemes;


  public validateCardColums(colums: string, cardColumValue: string): string {
    if (parseFloat(colums) < parseFloat(cardColumValue)) {
      return colums;
    }
    return cardColumValue;
  }

  public addFromGrpup(): void {
    const formGroup: IGridcardsFormControlNames = {
      id: this.dataGridCard.id,

      [EGridcardsInputNames.theme]: this.dataGridCard.theme ? this.dataGridCard.theme.selected : EThemes.Default,
      [EGridcardsInputNames.colums]: this.dataGridCard.colums.value,
      [EGridcardsInputNames.cardColumnFirst]: this.dataGridCard.cardColumn.first.value,
      [EGridcardsInputNames.cardColumnEven]: this.dataGridCard.cardColumn.even.value,
      [EGridcardsInputNames.cardColumnOdd]: this.dataGridCard.cardColumn.odd.value,
      [EGridcardsInputNames.cardColumnLast]: this.dataGridCard.cardColumn.last.value
    };
    this.formgroupGridCard = this.formBuilder.group(formGroup);
  }

  public addTheme(): void {
    this.dataGridCard.theme = !this.dataGridCard.theme ? this.store.snapshot().appstate.datagridcardsdefault.theme : null;
    this.dataGridCard.theme = DataThemeDefault2();
    this.formgroupGridCard.patchValue({theme: DataThemeDefault2().selected});
  }

  public removeTheme(): void {
    // this.dataGridCard.theme = !this.dataGridCard.theme ? this.store.snapshot().appstate.datagridcardsdefault.theme : null;
    this.dataGridCard.theme = null;
  }

  public dataMapper(values: IGridcardsFormControlNames): void {

    this.dataGridCard.colums.value = values.colums;
    this.dataGridCard.cardColumn.first.value = this.validateCardColums(this.dataGridCard.colums.value, values.cardColumnFirst);
    this.dataGridCard.cardColumn.odd.value = this.validateCardColums(this.dataGridCard.colums.value, values.cardColumnOdd);
    this.dataGridCard.cardColumn.even.value = this.validateCardColums(this.dataGridCard.colums.value, values.cardColumnEven);
    this.dataGridCard.cardColumn.last.value = this.validateCardColums(this.dataGridCard.colums.value, values.cardColumnLast);

    if (this.dataGridCard.theme) {
      this.dataGridCard.theme.selected = values[EGridcardsInputNames.theme];
    } else {
      this.dataGridCard.theme = null;
    }
  }

  public onSubmit(id) {
    console.log(id);
  }

  ngOnInit() {

    this.store.subscribe((response) => {
      this.dataGridCard = response.appstate.datagridcardTemp;

      if (this.dataGridCard) {
        this.addFromGrpup();
      }

      if (this.dataGridCard) {
        this.formgroupGridCard.valueChanges.subscribe((values => {
          this.dataMapper(values);
        }));
      }

    });
  }

  ngOnDestroy() {

    console.log('destroy');

  }


}

import {Component, OnDestroy, OnInit} from '@angular/core';

import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EGridcardsInputNames, IGridcardsFormControlNames} from './gridcards-form.interface';
import {LayoutService} from '../../../utils/layout/layout.service';
import {Observable, Subscription} from 'rxjs';
import {DataGridDefault, localisationGridCardsForm, GridcardsInterface} from '../../../../data';
import {EDirection, EThemes} from '../../../utils/layout/layout.interface';
import {GridcardsFormUtils} from './utils';

@Component({
  selector: 'app-gridcards-form',
  templateUrl: './gridcards-form.component.html',
  styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit, OnDestroy {

  public localisation = localisationGridCardsForm;
  public dataGridCard$: Observable<GridcardsInterface>;
  public dataGridCardSubscription: Subscription;
  public dataGridCard: GridcardsInterface | null = null;
  private dataGridDefault = new DataGridDefault();

  public themeGridCard = EThemes;
  public directions = EDirection;

  public formGroupGridInputNames = EGridcardsInputNames;
  public formGroupGridSubscription: Subscription;
  public formGroupGridCard: FormGroup;

  public validateCardColumns = new GridcardsFormUtils().validateCardColums;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    public layoutService: LayoutService,
  ) {
    this.dataGridCard$ = this.store.select(state => state.appstate.datagridcardTemp);
  }

  public addFromGrpup(): void {
    const formGroup: IGridcardsFormControlNames = {
      id: this.dataGridCard.id,
      [EGridcardsInputNames.headerContent]: this.dataGridCard.cardHeader ? this.dataGridCard.cardHeader.content : null,
      [EGridcardsInputNames.headerDirection]: this.dataGridCard.cardHeader ? this.dataGridCard.cardHeader.direction : null,
      [EGridcardsInputNames.theme]: this.dataGridCard.theme ? this.dataGridCard.theme.selected : null,
      [EGridcardsInputNames.columns]: this.dataGridCard.columns.value,
      [EGridcardsInputNames.cardColumnFirst]: this.dataGridCard.cardColumn.first.value,
      [EGridcardsInputNames.cardColumnEven]: this.dataGridCard.cardColumn.even.value,
      [EGridcardsInputNames.cardColumnOdd]: this.dataGridCard.cardColumn.odd.value,
      [EGridcardsInputNames.cardColumnLast]: this.dataGridCard.cardColumn.last.value,
      [EGridcardsInputNames.footerContent]: this.dataGridCard.cardFooter ? this.dataGridCard.cardFooter.content : null,
      [EGridcardsInputNames.footerDirection]: this.dataGridCard.cardFooter ? this.dataGridCard.cardFooter.direction : null
    };
    this.formGroupGridCard = this.formBuilder.group(formGroup);
  }

  public setHeader(): void {
    if (this.dataGridCard.cardHeader) {
      this.dataGridCard.cardHeader = null;
    } else {
      this.dataGridCard.cardHeader = this.dataGridDefault.header();
      this.formGroupGridCard.patchValue({
        headerContent: this.dataGridDefault.header().content,
        headerDirection: this.dataGridDefault.header().direction
      });
    }
  }

  public setTheme(): void {
    if (this.dataGridCard.theme) {
      this.dataGridCard.theme = null;
    } else {
      this.dataGridCard.theme = this.dataGridDefault.theme();
      this.formGroupGridCard.patchValue({theme: this.dataGridDefault.theme().selected});
    }
  }

  public setFooter(): void {
    if (this.dataGridCard.cardFooter) {
      this.dataGridCard.cardFooter = null;
    } else {
      this.dataGridCard.cardFooter = this.dataGridDefault.footer();
      this.formGroupGridCard.patchValue({
        footerContent: this.dataGridDefault.footer().content,
        footerDirection: this.dataGridDefault.footer().direction
      });
    }
  }

  public dataMapper(values: IGridcardsFormControlNames): void {

    if (this.dataGridCard.cardHeader) {
      this.dataGridCard.cardHeader.content = values[EGridcardsInputNames.headerContent];
      this.dataGridCard.cardHeader.direction = values[EGridcardsInputNames.headerDirection];
    } else {
      this.dataGridCard.cardHeader = null;
    }

    this.dataGridCard.columns.value = values.colums;
    this.dataGridCard.cardColumn.first.value = this.validateCardColumns(this.dataGridCard.columns.value, values.cardColumnFirst);
    this.dataGridCard.cardColumn.odd.value = this.validateCardColumns(this.dataGridCard.columns.value, values.cardColumnOdd);
    this.dataGridCard.cardColumn.even.value = this.validateCardColumns(this.dataGridCard.columns.value, values.cardColumnEven);
    this.dataGridCard.cardColumn.last.value = this.validateCardColumns(this.dataGridCard.columns.value, values.cardColumnLast);

    if (this.dataGridCard.theme) {
      this.dataGridCard.theme.selected = values[EGridcardsInputNames.theme];
    } else {
      this.dataGridCard.theme = null;
    }
    if (this.dataGridCard.cardFooter) {
      this.dataGridCard.cardFooter.content = values[EGridcardsInputNames.footerContent];
      this.dataGridCard.cardFooter.direction = values[EGridcardsInputNames.footerDirection];
    } else {
      this.dataGridCard.cardFooter = null;
    }
  }

  public onSubmit(id) {
    console.log(id);
  }

  ngOnInit() {
    this.dataGridCardSubscription = this.dataGridCard$.subscribe(state => {
      this.dataGridCard = state;
      if (this.dataGridCard) {
        this.addFromGrpup();
        this.formGroupGridSubscription = this.formGroupGridCard.valueChanges.subscribe((values => {
          this.dataMapper(values);
        }));
      }
    });
  }

  ngOnDestroy() {
    this.dataGridCardSubscription.unsubscribe();
    this.formGroupGridSubscription.unsubscribe();
  }

}

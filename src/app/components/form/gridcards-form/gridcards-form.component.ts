import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GridcardsInterface} from '../../../../data/gridcards.interface';
import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EGridcardsInputNames, IGridcardsFormControlNames} from './gridcards-form.interface';
import {LayoutService} from '../../../utils/layout/layout.service';
import {AppStateInterface, EThemes} from '../../../app.interface';
import {DataDefault, DataThemeDefault2} from '../../../../data/gridcradsdefaults';
import {Observable, Subscription} from 'rxjs';


@Component({
    selector: 'app-gridcards-form',
    templateUrl: './gridcards-form.component.html',
    styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit, OnDestroy {


    public globalState$: Observable<AppStateInterface>;
    public globalStateSubscription: Subscription;
    public globalState: AppStateInterface;

    constructor(
        private store: Store,
        private formBuilder: FormBuilder,
        private layoutService: LayoutService,
    ) {

        this.globalState$ = this.store.select(state => state.global);
    }

    public dataGridCard: GridcardsInterface | null = null;
    public formgroupGridCard: FormGroup;
    public themeGridCard = EThemes;

    private dataDefault = new DataDefault();


    public validateCardColums(colums: string, cardColumValue: string): string {
        if (parseFloat(colums) < parseFloat(cardColumValue)) {
            return colums;
        }
        return cardColumValue;
    }

    public addFromGrpup(): void {
        const formGroup: IGridcardsFormControlNames = {
            id: this.dataGridCard.id,

            [EGridcardsInputNames.theme]: this.dataGridCard.theme ? this.dataGridCard.theme.selected : null,
            [EGridcardsInputNames.colums]: this.dataGridCard.colums.value,
            [EGridcardsInputNames.cardColumnFirst]: this.dataGridCard.cardColumn.first.value,
            [EGridcardsInputNames.cardColumnEven]: this.dataGridCard.cardColumn.even.value,
            [EGridcardsInputNames.cardColumnOdd]: this.dataGridCard.cardColumn.odd.value,
            [EGridcardsInputNames.cardColumnLast]: this.dataGridCard.cardColumn.last.value
        };
        this.formgroupGridCard = this.formBuilder.group(formGroup);
    }

    public setTheme(): void {
        if (this.dataGridCard.theme) {
            this.dataGridCard.theme = null;
        } else {
            this.dataGridCard.theme = this.dataDefault.theme();
            this.formgroupGridCard.patchValue({theme: this.dataDefault.theme().selected});
        }
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

        this.globalStateSubscription = this.globalState$.subscribe(state => {
            this.globalState = state;

        });

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

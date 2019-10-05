import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {GridcardsInterface} from '../../../../data/gridcards.interface';
import {Store} from '@ngxs/store';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-gridcards-form',
  templateUrl: './gridcards-form.component.html',
  styleUrls: ['./gridcards-form.component.scss']
})
export class GridcardsFormComponent implements OnInit, AfterViewInit {

  @Input() public options: GridcardsInterface [];

  constructor(
    private store: Store,
    private formBuilder: FormBuilder) {
  }

  public formgroups: any[] = [];

  public addFromGrpup(): void {
    this.options.forEach((option) => {
      this.formgroups.push(this.formBuilder.group({
          id: [option.id],
          colums: [option.colums.value],
          cardColumnFirst: [option.cardColumn.first.value],
          cardColumnEven: [option.cardColumn.even.value],
          cardColumnOdd: [option.cardColumn.odd.value],
          cardColumnLast: [option.cardColumn.last.value],
        })
      );
    });
  }

  public dataMapper(id): void {
    this.store.subscribe((response) => {
      const gridData = response.appstate.datagridcards.find(
        (result, index, array) => {
          if (id === result.id) {
            return result;
          }
        }
      );

      const formValue = this.store.snapshot()[id].model;

      gridData.colums.value = formValue.colums;
      gridData.cardColumn.first.value = formValue.cardColumnFirst;
      gridData.cardColumn.even.value = formValue.cardColumnEven;
      gridData.cardColumn.odd.value = formValue.cardColumnOdd;
      gridData.cardColumn.last.value = formValue.cardColumnLast;

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

import {DataGridDefault, GridcardsInterface} from '../../../../data';
import {FormGroup} from '@angular/forms';

export class GridcardsFormUtils {

  public validateCardColums(colums: string, cardColumValue: string): string {
    if (parseFloat(colums) < parseFloat(cardColumValue)) {
      return colums;
    }
    return cardColumValue;
  }



}

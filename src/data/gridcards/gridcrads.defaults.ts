import {GridcardsSelectThemeInterface} from './gridcards.interface';
import {EGridcardsInputNames} from '../../app/components/form/gridcards-form/gridcards-form.interface';
import {EThemes} from '../../app/utils/layout/layout.interface';

export class DataGridDefault {

  public theme(): GridcardsSelectThemeInterface {
    return {
      selected: EThemes.Default
    };
  }
}

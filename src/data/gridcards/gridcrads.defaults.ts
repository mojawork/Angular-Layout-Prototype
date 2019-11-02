import {GridcardHeaderInterface, GridcardsSelectThemeInterface} from './gridcards.interface';
import {EDirection, EThemes} from '../../app/utils/layout/layout.interface';
import {localisationGridCardsForm} from '../localisation/localisation';

export class DataGridDefault {

  public header(): GridcardHeaderInterface {
    return {
      content: localisationGridCardsForm.header,
      direction: EDirection.Left,
      sticky: false
    };
  }

  public theme(): GridcardsSelectThemeInterface {
    return {
      selected: EThemes.Default
    };
  }

  public footer(): GridcardHeaderInterface {
    return {
      content: localisationGridCardsForm.footer,
      direction: EDirection.Left
    };
  }
}

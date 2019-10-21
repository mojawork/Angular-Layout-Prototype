import {GridcardsSelectThemeInterface} from './gridcards.interface';
import {EGridcardsInputNames} from '../app/components/form/gridcards-form/gridcards-form.interface';
import {EThemes} from '../app/app.interface';

export const dataThemeDefault: GridcardsSelectThemeInterface = {
  label: 'Theme',
  name: EGridcardsInputNames.theme,
  selected: EThemes.Default
};

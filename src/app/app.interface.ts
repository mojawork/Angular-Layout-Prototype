import {GridcardsInterface, GridcardsSelectThemeInterface} from '../data/gridcards.interface';

export interface AppStateInterface {
  datagridcards: GridcardsInterface [];
  datagridcardsdefault: {
    theme: GridcardsSelectThemeInterface
  };

}

export enum EThemes {
  Default = 'theme-default',
  Pinkpanter = 'theme-pinkpanter',
  Dark = 'theme-dark',
}

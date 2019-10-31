import {EDirection, EThemes} from '../../../utils/layout/layout.interface';


export enum EGridcardsInputNames {
  theme = 'theme',
  columns = 'colums',
  header = 'header',
  headerDirection = 'headerDirection',
  cardColumnFirst = 'cardColumnFirst',
  cardColumnEven = 'cardColumnEven',
  cardColumnOdd = 'cardColumnOdd',
  cardColumnLast = 'cardColumnLast',
}

export interface IGridcardsFormControlNames {
  id: string;
  [EGridcardsInputNames.header]: string | null;
  [EGridcardsInputNames.headerDirection]: EDirection | null;
  [EGridcardsInputNames.theme]: EThemes | null;
  [EGridcardsInputNames.columns]: string;
  [EGridcardsInputNames.cardColumnFirst]: string;
  [EGridcardsInputNames.cardColumnEven]: string;
  [EGridcardsInputNames.cardColumnOdd]: string;
  [EGridcardsInputNames.cardColumnLast]: string;
}

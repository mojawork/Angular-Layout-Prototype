import {EDirection, EThemes} from '../../../utils/layout/layout.interface';


export enum EGridcardsInputNames {
  headerContent = 'headerContent',
  headerDirection = 'headerDirection',
  theme = 'theme',
  columns = 'colums',
  cardColumnFirst = 'cardColumnFirst',
  cardColumnEven = 'cardColumnEven',
  cardColumnOdd = 'cardColumnOdd',
  cardColumnLast = 'cardColumnLast',
  footerContent = 'footerContent',
  footerDirection = 'footerDirection'
}

export interface IGridcardsFormControlNames {
  id: string;
  [EGridcardsInputNames.headerContent]: string | null;
  [EGridcardsInputNames.headerDirection]: EDirection | null;
  [EGridcardsInputNames.theme]: EThemes | null;
  [EGridcardsInputNames.columns]: string;
  [EGridcardsInputNames.cardColumnFirst]: string;
  [EGridcardsInputNames.cardColumnEven]: string;
  [EGridcardsInputNames.cardColumnOdd]: string;
  [EGridcardsInputNames.cardColumnLast]: string;
  [EGridcardsInputNames.footerContent]: string;
  [EGridcardsInputNames.footerDirection]: EDirection | null;
}

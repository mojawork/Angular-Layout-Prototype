/*
export class IGridcardsFormControlNames {
  public id = 'id';
  public colums = 'colums';
  public cardColumnFirst = 'cardColumnFirst';
  public cardColumnEven = 'cardColumnEven';
  public cardColumnOdd = 'cardColumnOdd';
  public cardColumnLast = 'cardColumnLast';
}
 */

import {EThemes} from '../../../app.interface';

export enum EGridcardsInputNames {
  theme = 'theme',
  colums = 'colums',
  cardColumnFirst = 'cardColumnFirst',
  cardColumnEven = 'cardColumnEven',
  cardColumnOdd = 'cardColumnOdd',
  cardColumnLast = 'cardColumnLast',
}


export interface IGridcardsFormControlNames {
  id: string;
  [EGridcardsInputNames.theme]: EThemes | null;
  [EGridcardsInputNames.colums]: string;
  [EGridcardsInputNames.cardColumnFirst]: string;
  [EGridcardsInputNames.cardColumnEven]: string;
  [EGridcardsInputNames.cardColumnOdd]: string;
  [EGridcardsInputNames.cardColumnLast]: string;
}





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

export enum formNames {
  colums = 'colums',
  cardColumnFirst = 'cardColumnFirst',
  cardColumnEven = 'cardColumnEven',
  cardColumnOdd = 'cardColumnOdd',
  cardColumnLast  = 'cardColumnLast',
}


export interface IGridcardsFormControlNames {
  id: string;
  [formNames.colums]: string;
  [formNames.cardColumnFirst]: string;
  [formNames.cardColumnEven]: string;
  [formNames.cardColumnOdd]: string;
  [formNames.cardColumnLast]: string;
}




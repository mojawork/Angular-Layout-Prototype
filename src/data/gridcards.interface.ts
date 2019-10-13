import {formNames} from '../app/components/form/gridcards-form/gridcards-form.interface';

export interface GridcardsInterface {
  id: string;
  colums: GridcardsValueInterface;
  cardHeader?: GridcardHeaderInterface;
  cardColumn?: {
    first: GridcardsValueInterface;
    even: GridcardsValueInterface;
    odd: GridcardsValueInterface;
    last: GridcardsValueInterface;
  };
  cardContent?: GridcardsContentInterface [];
  cardFooter?: GridcardFooterInterface | null;
}

export interface GridcardHeaderInterface {
  sticky?: boolean;
  content?: string;
  direction?: GridcardDirectionEnum;
}

export interface GridcardsValueInterface {
  label: string;
  name: formNames;
  type: string;
  value: string;
}

export interface GridcardsContentInterface {
  /*
  image: {
    src?: string;
    title?: string;
    alt?: string;
    figcaption?: string;
  };
  */
  content?: string;
}

export interface GridcardFooterInterface {
  content?: string;
  direction?: GridcardDirectionEnum;
}

export interface GirdCardColumTypeInterface {
  first: boolean;
  last: boolean;
  even: boolean;
  odd: boolean;

}

export enum GridcardsColumTypeEnum {
  first,
  last,
  even,
  odd,

}

export enum GridcardDirectionEnum {
  Up,
  Down,
  Left,
  Right,

}

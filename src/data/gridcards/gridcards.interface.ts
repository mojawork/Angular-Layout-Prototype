import {EDirection, EThemes} from '../../app/utils/layout/layout.interface';
import {EGridcardsInputNames} from '../../app/components/form/gridcards-form/gridcards-form.interface';

export interface GridcardsInterface {
  id: string;
  theme?: GridcardsSelectThemeInterface;
  columns: GridcardsValueInterface;
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
  direction?: EDirection;
}

export interface GridcardsSelectThemeInterface {
  selected: EThemes;
}

export interface GridcardsValueInterface {
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
  direction?: EDirection;
}

export interface GirdCardColumTypeInterface {
  first: boolean;
  last: boolean;
  even: boolean;
  odd: boolean;
}




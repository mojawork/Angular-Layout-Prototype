export interface GridcardsInterface {
  colums: number;
  cardHeader?: GridcardHeaderInterface;
  cardColumn?: {
    first: number;
    even: number;
    odd: number;
    last: number;
  };
  cardContent?: GridcardContentInterface [];
  cardFooter?: GridcardFooterInterface | null;
}

export interface GridcardHeaderInterface {
  sticky?: boolean;
  content?: string;
  direction?: GridcardDirectionEnum;
}

export interface GridcardContentInterface {
  image: {
    src?: string;
    title?: string;
    alt?: string;
    figcaption?: string;
  };
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

export enum GridcardDirectionEnum {
  Up,
  Down,
  Left,
  Right,

}

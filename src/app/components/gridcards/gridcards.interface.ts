export interface GridcardsOptionsInterface {
    visual: {
        set: string | null;
        colums?: number;
        cardColumn?: {
            first?: number;
            even?: number;
            odd?: number;
            last?: number;
        };
    };
    cardHeader?: GridcardHeaderInterface;
    cardContent?: GridcardContentInterface[];
    cardFooter?: GridcardFooterInterface;
}

export interface GridcardHeaderInterface {
    visual?: {
        direction?: GridcardOptionsDirectionEnum;
    };
    content: string;
}

export interface GridcardContentInterface {
    visual?: {
        direction?: GridcardOptionsDirectionEnum;
    };
    content: string;
    image?: {
        src: string;
        title?: string;
        alt?: string;
        figcaption?: string;
    };
   }


export interface GridcardFooterInterface {
    visual?: {
        direction?: GridcardOptionsDirectionEnum;
    };
    content: string;
}

export enum GridcardOptionsDirectionEnum {
    Up,
    Down,
    Left,
    Right,
}

export enum GridcardOptionsSetEnum {
    test = 'TEST'
}

// -------------------------

export interface GirdCardColumTypeInterface {
    first: boolean;
    last: boolean;
    even: boolean;
    odd: boolean;
}



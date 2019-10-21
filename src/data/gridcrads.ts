import {GridcardsInterface} from './gridcards.interface';
import {EGridcardsInputNames} from '../app/components/form/gridcards-form/gridcards-form.interface';
import {EThemes} from '../app/app.interface';


export const dataGridCards: GridcardsInterface[] = [
  {
    id: 'GridID-01',
    theme: null,
    colums: {
      label: 'colums',
      name: EGridcardsInputNames.colums,
      value: '6',
      type: 'number'
    },
    cardHeader: {
      content: 'Header: Change Cards'
    },
    cardColumn: {
      first: {
        label: 'cardColumn first',
        name: EGridcardsInputNames.cardColumnFirst,
        value: '1',
        type: 'number'
      },
      even: {
        label: 'cardColumn even',
        name: EGridcardsInputNames.cardColumnEven,
        value: '1',
        type: 'number'
      },
      odd: {
        label: 'cardColumn odd',
        name: EGridcardsInputNames.cardColumnOdd,
        value: '1',
        type: 'number'
      },
      last: {
        label: 'cardColumn last',
        name: EGridcardsInputNames.cardColumnLast,
        value: '1',
        type: 'number'
      }
    },
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'},
      {content: 'Content 04'},
      {content: 'Content 05'},
      {content: 'Content 06'},
      {content: 'Content 07'},
      {content: 'Content 08'},
      {content: 'Content 09'},
      {content: 'Content 10'},
      {content: 'Content 11'},
      {content: 'Content 12'}
    ],
    cardFooter: {
      content: 'Footer'
    }
  },
  {
    id: 'GridID-02',
    theme: {
      label: 'Theme',
      name: EGridcardsInputNames.theme,
      selected: EThemes.Default
    },
    colums: {
      label: 'colums',
      name: EGridcardsInputNames.colums,
      value: '6',
      type: 'number'
    },
    cardHeader: {
      content: 'Header: Change Cards'
    },
    cardColumn: {
      first: {
        label: 'cardColumn first',
        name: EGridcardsInputNames.cardColumnFirst,
        value: '4',
        type: 'number'
      },
      even: {
        label: 'cardColumn even',
        name: EGridcardsInputNames.cardColumnEven,
        value: '2',
        type: 'number'
      },
      odd: {
        label: 'cardColumn odd',
        name: EGridcardsInputNames.cardColumnOdd,
        value: '2',
        type: 'number'
      },
      last: {
        label: 'cardColumn last',
        name: EGridcardsInputNames.cardColumnLast,
        value: '4',
        type: 'number'
      }
    },
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'},
      {content: 'Content 04'},
      {content: 'Content 05'},
      {content: 'Content 06'},
      {content: 'Content 07'},
      {content: 'Content 08'},
      {content: 'Content 09'},
      {content: 'Content 10'}
    ],
    cardFooter: {
      content: 'Footer'
    }
  },
  {
    id: 'GridID-03',
    theme: {
      label: 'Theme',
      name: EGridcardsInputNames.theme,
      selected: EThemes.Dark
    },
    colums: {
      label: 'colums',
      name: EGridcardsInputNames.colums,
      value: '3',
      type: 'number'
    },
    cardHeader: {
      content: 'Header: Change Cards'
    },
    cardColumn: {
      first: {
        label: 'cardColumn first',
        name: EGridcardsInputNames.cardColumnFirst,
        value: '1',
        type: 'number'
      },
      even: {
        label: 'cardColumn even',
        name: EGridcardsInputNames.cardColumnEven,
        value: '1',
        type: 'number'
      },
      odd: {
        label: 'cardColumn odd',
        name: EGridcardsInputNames.cardColumnOdd,
        value: '1',
        type: 'number'
      },
      last: {
        label: 'cardColumn last',
        name: EGridcardsInputNames.cardColumnLast,
        value: '1',
        type: 'number'
      }
    },
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'}
    ],
    cardFooter: {
      content: 'Footer'
    }
  },
];


/*
export const dataGridCards: GridcardsInterface[] = [
  {
    id: 'GridID-01',
    colums: 6,
    cardHeader: {
      content: 'Header: gridcards 02'
    },
    cardColumn: {
      first: 4,
      even: 2,
      odd: 2,
      last: 4
    },
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'},
      {content: 'Content 04'},
      {content: 'Content 05'},
      {content: 'Content 06'},
      {content: 'Content 07'},
      {content: 'Content 08'},
      {content: 'Content 09'},
      {content: 'Content 10'}
    ],
    cardFooter: {
      content: 'Footer'
    }
  },
  {
    id: 'GridID-02',
    colums: 4,
    cardHeader: {
      content: 'Header: gridcards 01'
    },
    cardColumn: {
      first: 2,
      even: 1,
      odd: 2,
      last: 1
    },
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'},
      {content: 'Content 04'},
      {content: 'Content 05'}
    ],
    cardFooter: {
      content: 'Footer'
    }
  },

  {
    id: 'GridID-03',
    colums: 2,
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'},
      {content: 'Content 04'},
      {content: 'Content 05'},
      {content: 'Content 06'},
      {content: 'Content 07'},
      {content: 'Content 08'},
      {content: 'Content 09'},
      {content: 'Content 10'}
    ]
  }

];
*/

import {GridcardsInterface} from './gridcards.interface';
import {EDirection, EThemes} from '../../app/utils/layout/layout.interface';

export const dataGridCards: GridcardsInterface[] = [
  {
    id: 'GridID-01',
    theme: null,
    columns: {
      value: '6',
    },
    cardColumn: {
      first: {
        value: '1',
      },
      even: {
        value: '1',
      },
      odd: {
        value: '1',
      },
      last: {
        value: '1',
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
    ]
  },
  {
    id: 'GridID-02',
    theme: {
      selected: EThemes.Default
    },
    columns: {
      value: '6',
    },
    cardHeader: {
      content: 'Header: Change Cards',
      direction: EDirection.Left,
      sticky: false
    },
    cardColumn: {
      first: {
        value: '4',
      },
      even: {
        value: '2',
      },
      odd: {
        value: '2',
      },
      last: {
        value: '4',
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
      content: 'Footer: Change Cards',
      direction: EDirection.Left,
    }
  },
  {
    id: 'GridID-03',
    theme: {
      selected: EThemes.Dark
    },
    columns: {
      value: '3',
    },
    cardHeader: {
      content: 'Header: Change Cards',
      direction: EDirection.Left,
      sticky: false
    },
    cardColumn: {
      first: {
        value: '1',
      },
      even: {
        value: '1',
      },
      odd: {
        value: '1',
      },
      last: {
        value: '1',
      }
    },
    cardContent: [
      {content: 'Content 01'},
      {content: 'Content 02'},
      {content: 'Content 03'}
    ],
    cardFooter: {
      content: 'Footer: Change Cards',
      direction: EDirection.Left,
    }
  },
];

import {GridcardsInterface} from '../app/components/gridcards/gridcards.interface';

export const GridcardsTest: GridcardsInterface[] = [
  {
    colums: 6,
    cardHeader: {
      content: 'Header: Change Cards'
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
  }

];

export const dataGridCards: GridcardsInterface[] = [
  {
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
    cardContent:[
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

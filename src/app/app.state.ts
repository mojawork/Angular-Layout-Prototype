import {State, Action, StateContext} from '@ngxs/store';
import {IAppState} from './app.interface';


import {dataGridCards, GridcardsInterface} from '../data';

export class DataGridCards {
  public static readonly type = 'datagridcards';

  constructor(public dataGridCardsPayload: GridcardsInterface[]) {
  }
}

export class DataGridCardTemp {
  public static readonly type = 'datagridcardtemp';

  constructor(public dataGridCardTempPayload: GridcardsInterface) {
  }
}

@State<IAppState>({
  name: 'appstate',
  defaults: {
    datagridcards: dataGridCards,
    datagridcardTemp: null,
  }
})
export class AppState {

  @Action(DataGridCards)
  public setDataGridCards(ctx: StateContext<GridcardsInterface>, {dataGridCardsPayload}: DataGridCards) {
    ctx.setState((state) => ({...state, datagridcards: dataGridCardsPayload}));
  }

  @Action(DataGridCardTemp)
  public setDataGridCardTemp(ctx: StateContext<GridcardsInterface>, {dataGridCardTempPayload}: DataGridCardTemp) {
    ctx.setState((state) => ({...state, datagridcardTemp: dataGridCardTempPayload}));
  }
}



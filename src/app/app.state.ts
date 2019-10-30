import {State, Action, StateContext} from '@ngxs/store';
import {AppStateInterface} from './app.interface';
import {dataGridCards} from '../data/gridcrads';
import {GridcardsInterface, GridcardsSelectThemeInterface} from '../data/gridcards.interface';
import {dataThemeDefault} from '../data/gridcradsdefaults';


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

@State<AppStateInterface>({
  name: 'appstate',
  defaults: {
    datagridcards: dataGridCards,
    datagridcardTemp: null,
    datagridcardsdefault : {
      theme : dataThemeDefault
    }
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



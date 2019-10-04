import {State, Action, StateContext} from '@ngxs/store';
import {AppStateInterface} from './app.interface';
import {dataGridCards} from '../data/gridcrads';
import {GridcardsInterface} from '../data/gridcards.interface';


export class DataGridCards {
  public static readonly type = 'datagridcards';
  constructor(public dataGridCardsPayload: GridcardsInterface[]) {
  }
}

@State<AppStateInterface>({
  name: 'appstate',
  defaults: {
    test: 'Wurst',
    datagridcards: dataGridCards
  }
})
export class AppState {

  @Action(DataGridCards)
  public setDataGridCards(ctx: StateContext<GridcardsInterface>, {dataGridCardsPayload}: DataGridCards) {
    ctx.setState((state) => ({...state, datagridcards: dataGridCardsPayload}));
  }

}



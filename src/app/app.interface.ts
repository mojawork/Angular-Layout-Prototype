import {GridcardsInterface} from '../data';

export interface IAppState {
  datagridcards: GridcardsInterface [];
  datagridcardTemp: GridcardsInterface | null;
}

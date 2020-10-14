import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {LayoutService} from './utils/layout/layout.service';
import {GridcardsInterface} from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'layout';
  public color = true;
  public datagridcards: GridcardsInterface[] | null = null;
  public datagridcardTemp: GridcardsInterface | null = null;
  public zoom: boolean = this.layoutService.getLayoutStatus().zoom;

  public zoomIcons(): string {
    return this.layoutService.getLayoutStatus().zoom ? 'chevron_right chevron_left' : 'chevron_left chevron_right';
  }

  constructor(
    private store: Store,
    public layoutService: LayoutService
  ) {
  }

  ngOnInit() {
    this.store.subscribe((response) => {
      this.datagridcards = response.appstate.datagridcards;
      this.datagridcardTemp = response.appstate.datagridcardTemp;
    });


  }

}

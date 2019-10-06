import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LayoutStatusInterface} from './layout.interface';
import {LAYOUTSTATUS} from './layout.status';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private $layoutStatus: BehaviorSubject<LayoutStatusInterface> = new BehaviorSubject(LAYOUTSTATUS);
  private layoutStatus: LayoutStatusInterface;

  constructor() {
  }

  public getLayoutStatus(): LayoutStatusInterface {
    this.$layoutStatus.asObservable().subscribe(
      (response) => {
        this.layoutStatus = response;
      });
    return this.layoutStatus;
  }

  public setLayoutZoom() {
    this.layoutStatus.zoom = !this.layoutStatus.zoom;
  }

}

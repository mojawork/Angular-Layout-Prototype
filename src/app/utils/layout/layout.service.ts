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

  public setForm(formid: string): void {
    if (this.layoutStatus.formid !== formid) {
      this.layoutStatus.formid = formid;
      this.layoutStatus.form = true;
    } else {
      this.layoutStatus.form = !this.layoutStatus.form;
    }
  }

  public setLayoutZoom(): void {
    this.layoutStatus.zoom = !this.layoutStatus.zoom;
  }

}

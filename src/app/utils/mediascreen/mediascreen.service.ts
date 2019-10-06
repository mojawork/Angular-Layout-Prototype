import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MediascreenStatusInterface} from './mediascreen.interface';
import {MEDIASCREENSTATUS} from './mediascreen.status';

@Injectable({
  providedIn: 'root'
})
export class MediascreenService {
  private $mediaScreenStatus: BehaviorSubject<MediascreenStatusInterface> = new BehaviorSubject(MEDIASCREENSTATUS);
  private mediasScreenStatus: MediascreenStatusInterface;

  constructor() {
  }

  public getMediascreenStatus(): MediascreenStatusInterface {
    this.$mediaScreenStatus.asObservable().subscribe(
      (response) => {
        this.mediasScreenStatus = response;
      });
    return this.mediasScreenStatus;
  }

  public setMediascreen(mediascreen: MediascreenStatusInterface) {
    this.$mediaScreenStatus.next(mediascreen);
  }

}

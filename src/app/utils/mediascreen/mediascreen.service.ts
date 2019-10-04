import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MediascreenStatusInterface, } from './mediascreen.interface';
import {MEDIASCREENSTATUS} from './mediascreen.status';

@Injectable({
    providedIn: 'root'
})
export class MediascreenService {
    private mediaScreen: BehaviorSubject<MediascreenStatusInterface> = new BehaviorSubject(MEDIASCREENSTATUS);

    constructor() {
    }

    public getMediascreen(): Observable<MediascreenStatusInterface> {
        return this.mediaScreen.asObservable();
    }

    public setMediascreen(mediascreen: MediascreenStatusInterface) {
        this.mediaScreen.next(mediascreen);
    }

}

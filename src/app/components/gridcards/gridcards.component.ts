import {Component, Input, OnInit} from '@angular/core';
import {GirdCardColumTypeInterface, GridcardsOptionsInterface} from './gridcards.interface';
import {MediascreenService} from '../../utils/mediascreen/mediascreen.service';
import {MediascreenStatusInterface} from '../../utils/mediascreen/mediascreen.interface';

@Component({
    selector: 'app-gridcards',
    templateUrl: './gridcards.component.html',
    styleUrls: ['./gridcards.component.scss']
})
export class GridcardsComponent implements OnInit {

    @Input() public options: GridcardsOptionsInterface;

    private startByMediaScreen = 5;


    constructor(
        private mediascreenService: MediascreenService
    ) {
    }

    private MediaScreenStatus: MediascreenStatusInterface | null = null;

    public gridTemplateColums() {

        if (this.MediaScreenStatus && this.MediaScreenStatus.ms >= this.startByMediaScreen) {
            let colums = '1fr';
            for (let i = 0; i < (this.options.visual.colums - 1); i++) {
                colums = `${colums}  1fr`;
            }
            return {'grid-template-columns': colums};
        }

    }

    public gridColumcard(type: GirdCardColumTypeInterface) {

        if (this.MediaScreenStatus && this.MediaScreenStatus.ms >= this.startByMediaScreen) {

            if (this.options.visual.cardColumn && type.first) {
                return {'grid-column': 'span ' + this.options.visual.cardColumn.first};
            }

            if (this.options.visual.cardColumn && type.even && !type.first && !type.last) {
                return {'grid-column': 'span ' + this.options.visual.cardColumn.even};
            }
            if (this.options.visual.cardColumn && type.odd && !type.first && !type.last) {
                return {'grid-column': 'span ' + this.options.visual.cardColumn.odd};
            }

            if (this.options.visual.cardColumn && type.last) {
                return {'grid-column': 'span ' + this.options.visual.cardColumn.last};
            }
        }
        return {'grid-column': 'span 1'};
    }

    public gridColumHeaderFooter() {
        if (this.MediaScreenStatus && this.MediaScreenStatus.ms >= this.startByMediaScreen) {
            return {'grid-column': 'span ' + this.options.visual.colums};
        }
    }


    public ngOnInit() {

        if (!this.options.visual.set) {
            this.mediascreenService.getMediascreen().subscribe((response) => {
                this.MediaScreenStatus = response;
            });
        }

    }

}

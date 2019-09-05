import {Component, Input, OnInit} from '@angular/core';
import {GirdCardColumTypeInterface, GridcardsInterface} from './gridcards.interface';
import {MediascreenService} from '../../utils/mediascreen/mediascreen.service';
import {Observable} from 'rxjs';
import {MediascreenStatusInterface} from '../../utils/mediascreen/mediascreen.interface';

@Component({
    selector: 'app-gridcards',
    templateUrl: './gridcards.component.html',
    styleUrls: ['./gridcards.component.scss']
})
export class GridcardsComponent implements OnInit {

    @Input() public options: GridcardsInterface;


    constructor(
        private mediascreenService: MediascreenService
    ) {
    }


    private MediaScreenStatus: MediascreenStatusInterface;


    public gridTemplateColums() {
        let colums = '1fr';
        for (let i = 0; i < (this.options.colums - 1); i++) {
            colums = `${colums}  1fr`;
        }
        return {'grid-template-columns': colums};
    }


    private splitCardColumn(cardColumn: number): number {


        /*
        if (this.MediaScreenStatus.ms === 3) {
            return cardColumn * 2;
        }

         */


        return cardColumn;


    }

    public gridColumcard(type: GirdCardColumTypeInterface) {


        if (this.options.cardColumn && type.first) {
            return {'grid-column': 'span ' + this.options.cardColumn.first};
        }


        if (this.options.cardColumn && type.even && !type.first && !type.last) {
            return {'grid-column': 'span ' + this.splitCardColumn(this.options.cardColumn.even)};
        }
        if (this.options.cardColumn && type.odd && !type.first && !type.last) {
            return {'grid-column': 'span ' + this.splitCardColumn(this.options.cardColumn.odd)};
        }

        if (this.options.cardColumn && type.last) {
            return {'grid-column': 'span ' + this.options.cardColumn.last};
        }


        return {'grid-column': 'span 1'};

    }

    public gridColumHeaderFooter() {
        return {'grid-column': 'span ' + this.options.colums};
    }


    public ngOnInit() {

        this.mediascreenService.getMediascreen().subscribe((response) => {
            this.MediaScreenStatus = response;

        });

    }

}

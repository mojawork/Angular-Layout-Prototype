import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {MediascreenService} from "./mediascreen.service";

@Component({
    selector: 'app-mediascreen',
    templateUrl: './mediascreen.component.html',
    styleUrls: ['./mediascreen.component.scss']
})
export class MediascreenComponent implements OnInit, AfterViewInit {

    constructor(
        private element: ElementRef,
        private mediascreenService: MediascreenService
    ) {
    }


    private updateService() {
        const pseudoAfterContent: string[] =
            window.getComputedStyle(
                this.element.nativeElement, ':after'
            ).content.split('-');

        this.mediascreenService.setMediascreen({
            ms: parseInt(pseudoAfterContent[1], 10),
            orinatation: pseudoAfterContent[2]
        });

    }

    public ngOnInit(): void {
        this.updateService();
    }

    public ngAfterViewInit() {
        const delay = 150;
        let throttled = false;
        window.addEventListener('resize', () => {
            if (!throttled) {
                this.updateService();
                throttled = true;
                setTimeout(() => {
                    throttled = false;
                }, delay);
            }
        });
    }

}

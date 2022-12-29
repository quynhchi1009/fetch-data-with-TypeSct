import { Component } from '@angular/core';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
    public data: any;
    public stage: Stage[] = [];
    private slideIndex: number = 0;
    public loading: boolean = true;

    constructor() {
        this.getData();
        this.loading = false;
        this.showSlides();
    }

    public async getData() {
        const res = await fetch('https://virtserver.swaggerhub.com/raysono/RaySonoHome/1.0.0/stage')
        this.data = await res.json();
        this.data.forEach((element: Stage) => {
            this.stage.push(element)
        });
    }

    public async showSlides() {
        let i;
        setInterval(() => {
            let slides = Array.from(document.getElementsByClassName("slider") as HTMLCollectionOf<HTMLElement>);
            let dots = Array.from(document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>);
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            this.slideIndex++;
            if (this.slideIndex > slides.length) { this.slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            if (slides[this.slideIndex - 1] != undefined) {
                slides[this.slideIndex - 1].style.display = "block";
                dots[this.slideIndex - 1].classList.add("active");
            }
        }, 2000); // Change image every 2 seconds
    }
}

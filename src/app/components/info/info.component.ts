import { Component } from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})

export class InfoComponent {
    public data: any;
    public teaser: Teaser[] = []; //List of all teasers
    public category: string[] = []; //List of all categories
    public loading: boolean = true;
    public chosenCategory: string = "Pick a category";
    public filterSelected: any[] = [];
    public filteredTeaser: Teaser[] = [];


    constructor() {
        this.getData();
        this.loading = false;
    }

    ngOnIt() {
    }

    public async getData() {
        const res = await fetch('https://virtserver.swaggerhub.com/raysono/RaySonoHome/1.0.0/teaser')
        this.data = await res.json();
        this.data.teaser.forEach((element: Teaser) => {
            this.teaser.push(element)
            element.category.forEach(categ => {
                if (!this.category.includes(categ)) {
                    this.category.push(categ)
                }
            });
        });
        this.filteredTeaser = this.teaser;
    }

    /**
     * Filter the teaser
     * @param item chosen category
     */
    public selectionChanged(item: any) {
        var index = this.filterSelected.indexOf(item);
        if (index > -1) {
            this.filterSelected = this.filterSelected.filter(function (el) { 
                return el!= item
            })
        } else {
            this.filterSelected.push(item)
        }

        this.filteredTeaser = this.teaser.filter(itemX => this.filterSelected.includes(itemX.category[0]));

        //Change titel of the section dynamically due to the filter
        this.chosenCategory = "";
        this.filterSelected.forEach(element => {
            this.filterSelected.length === 1 ? this.chosenCategory = element : this.chosenCategory += element + ", "
        });

        //No filter is selected = all filters are selected.
        if (this.filterSelected.length === 0) { 
            this.filteredTeaser = this.teaser;
            this.chosenCategory = "Pick a category";
        }
    }
}

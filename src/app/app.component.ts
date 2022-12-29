import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Ray Sono';

    constructor(private renderer: Renderer2) { 
        // let body = this.renderer.selectRootElement('body');
        // this.renderer.setStyle(body, 'margin', 0);
    }
}

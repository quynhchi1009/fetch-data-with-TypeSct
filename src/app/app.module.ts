import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    InfoComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
      BrowserModule, 
      HttpClientModule, 
      SelectButtonModule
    //   HttpHeaders, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

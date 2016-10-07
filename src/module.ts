import { NgModule ,Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./routing";
import {Menu} from "./components/Menu";
@Component({
    selector: 'my-app',
    template: `
  <div>
   <title>angular2首页</title>
    <menu></menu>
    <router-outlet></router-outlet>
  </div>
  `,
})
class MainAppComponent {}

@NgModule({
    imports: [
        BrowserModule,
        routing,
    ],
    declarations: [MainAppComponent,Menu],
    bootstrap: [ MainAppComponent],
})
export class MainModule { }




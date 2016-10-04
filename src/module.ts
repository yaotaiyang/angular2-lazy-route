import { NgModule ,Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./routing";
@Component({
    selector: 'my-app',
    template: `
  <div>
    <h3>Angular2 Lazy Module Loading Demo</h3>
    <hr>
    <a routerLink="/">首页</a> |
    <a routerLink="/sub">sub页</a>
    <br />
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
    declarations: [MainAppComponent],
    bootstrap: [ MainAppComponent ],
})
export class MainModule { }




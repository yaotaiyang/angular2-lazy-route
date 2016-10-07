import { Component } from "@angular/core";

@Component({
    selector: "page-me",
    template: `
    <h2>关于我页面</h2>
    <router-outlet></router-outlet>
  `
})
export class PageComponent {
}

import { Component } from "@angular/core";

@Component({
  selector: "page-sub",
  template: `
    <h2>二级列表页</h2>
    <router-outlet></router-outlet>
  `
})
export class PageComponent {
}

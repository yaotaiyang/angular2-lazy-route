import { Component } from "@angular/core";
import {Http, Response} from '@angular/http';

@Component({
  selector: "page-sub",
  template: `
    <h2>二级列表页</h2>
    <div *ngIf="loading">{{loading}}loading...</div>
    <pre>{{data | json}}</pre>
    <router-outlet></router-outlet>
  `
})
export class PageComponent {
    data: Object;
    loading: boolean;
    constructor(public http: Http) {
        this.makeRequest();
    }
    makeRequest(): void {
        this.loading = true;
        this.http.request('http://www.yaotaiyang.com')
            .subscribe((res: Response) => {
                this.data = res;
                this.loading = false;
            });
    }
}

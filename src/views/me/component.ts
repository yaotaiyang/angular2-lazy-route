import { Component } from "@angular/core";

@Component({
    selector: "page-me",
    template: `
      <div class="page__hd">
        <h1 class="page__title">我</h1>
        <p class="page__desc">这里是关于我的介绍</p>
    </div>
    <div class="page__bd">
        <article class="weui-article">
            <h3>1.1 关于有惊喜</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute
            </p>
        </article>
    </div>
  `
})
export class PageComponent {
}

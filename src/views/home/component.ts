import { Component } from "@angular/core";

@Component({
    selector: "page-home",
    template: `
    <div class="page__hd">
        <h1 class="page__title">首页</h1>
        <p class="page__desc">欢迎来到首页</p>
    </div>
    <div class="page__bd">
        <article class="weui-article">
            <h3>1.1 首页有惊喜</h3>
            <p>
               某公司经常加班，然后有个人猝死了，后来来了一个妹子，坐那个位子，大家都没告诉她猝死的事情。某天晚上加班，妹子有段代码不会写，就让男朋友远程帮忙写，然后就去吃饭了。<br>
               然后，产品经理路过她的位置的时候，看了一眼她电脑，发现电脑在自动一行一行的写代码。<br><br>
               第二天，那个产品经理就离职了。
            </p>
        </article>
    </div>
    <router-outlet></router-outlet>
  `
})
export class PageComponent {
}

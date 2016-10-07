import {Component} from '@angular/core';
@Component({
    selector: 'menu',
    template: `<div class="weui_tabbar">
    <a class="weui_tabbar_item" routerLink="/"><div class="weui_tabbar_icon"><img src="/images/icon_nav_button.png"></div><p class="weui_tabbar_label">首页</p></a>
    <a class="weui_tabbar_item" routerLink="/sub"><div class="weui_tabbar_icon"><img src="/images/icon_nav_msg.png"></div><p class="weui_tabbar_label">列表</p></a>
    <a class="weui_tabbar_item" routerLink="/me"><div class="weui_tabbar_icon"><img src="/images/icon_nav_article.png"></div><p class="weui_tabbar_label">我</p></a></div>`
})
export class Menu {
}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Menu = (function () {
    function Menu() {
    }
    Menu = __decorate([
        core_1.Component({
            selector: 'menu',
            template: "<div class=\"weui_tabbar\">\n    <a class=\"weui_tabbar_item\" routerLink=\"/\"><div class=\"weui_tabbar_icon\"><img src=\"/images/icon_nav_button.png\"></div><p class=\"weui_tabbar_label\">\u9996\u9875</p></a>\n    <a class=\"weui_tabbar_item\" routerLink=\"/sub\"><div class=\"weui_tabbar_icon\"><img src=\"/images/icon_nav_msg.png\"></div><p class=\"weui_tabbar_label\">\u5217\u8868</p></a>\n    <a class=\"weui_tabbar_item\" routerLink=\"/me\"><div class=\"weui_tabbar_icon\"><img src=\"/images/icon_nav_article.png\"></div><p class=\"weui_tabbar_label\">\u6211</p></a></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map
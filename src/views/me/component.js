var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent = __decorate([
        core_1.Component({
            selector: "page-me",
            template: "\n      <div class=\"page__hd\">\n        <h1 class=\"page__title\">\u6211</h1>\n        <p class=\"page__desc\">\u8FD9\u91CC\u662F\u5173\u4E8E\u6211\u7684\u4ECB\u7ECD</p>\n    </div>\n    <div class=\"page__bd\">\n        <article class=\"weui-article\">\n            <h3>1.1 \u5173\u4E8E\u6709\u60CA\u559C</h3>\n            <p>\n               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                    consequat. Duis aute\n            </p>\n        </article>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageComponent);
    return PageComponent;
})();
exports.PageComponent = PageComponent;
//# sourceMappingURL=component.js.map
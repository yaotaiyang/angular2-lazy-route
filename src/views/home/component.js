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
            selector: "page-home",
            template: "\n    <div class=\"page__hd\">\n        <h1 class=\"page__title\">\u9996\u9875</h1>\n        <p class=\"page__desc\">\u6B22\u8FCE\u6765\u5230\u9996\u9875</p>\n    </div>\n    <div class=\"page__bd\">\n        <article class=\"weui-article\">\n            <h3>1.1 \u9996\u9875\u6709\u60CA\u559C</h3>\n            <p>\n               \u67D0\u516C\u53F8\u7ECF\u5E38\u52A0\u73ED\uFF0C\u7136\u540E\u6709\u4E2A\u4EBA\u731D\u6B7B\u4E86\uFF0C\u540E\u6765\u6765\u4E86\u4E00\u4E2A\u59B9\u5B50\uFF0C\u5750\u90A3\u4E2A\u4F4D\u5B50\uFF0C\u5927\u5BB6\u90FD\u6CA1\u544A\u8BC9\u5979\u731D\u6B7B\u7684\u4E8B\u60C5\u3002\u67D0\u5929\u665A\u4E0A\u52A0\u73ED\uFF0C\u59B9\u5B50\u6709\u6BB5\u4EE3\u7801\u4E0D\u4F1A\u5199\uFF0C\u5C31\u8BA9\u7537\u670B\u53CB\u8FDC\u7A0B\u5E2E\u5FD9\u5199\uFF0C\u7136\u540E\u5C31\u53BB\u5403\u996D\u4E86\u3002<br>\n               \u7136\u540E\uFF0C\u4EA7\u54C1\u7ECF\u7406\u8DEF\u8FC7\u5979\u7684\u4F4D\u7F6E\u7684\u65F6\u5019\uFF0C\u770B\u4E86\u4E00\u773C\u5979\u7535\u8111\uFF0C\u53D1\u73B0\u7535\u8111\u5728\u81EA\u52A8\u4E00\u884C\u4E00\u884C\u7684\u5199\u4EE3\u7801\u3002<br><br>\n               \u7B2C\u4E8C\u5929\uFF0C\u90A3\u4E2A\u4EA7\u54C1\u7ECF\u7406\u5C31\u79BB\u804C\u4E86\u3002\n            </p>\n        </article>\n    </div>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageComponent);
    return PageComponent;
})();
exports.PageComponent = PageComponent;
//# sourceMappingURL=component.js.map
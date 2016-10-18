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
var http_1 = require('@angular/http');
var PageComponent = (function () {
    function PageComponent(http) {
        this.http = http;
        this.makeRequest();
    }
    PageComponent.prototype.makeRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.get('data.json')
            .subscribe(function (res) {
            console.log(res);
            _this.list = [{ "title": "xxxx" }, { "title": "xxxxx1111" }, { "title": "sdfsafasfsaf" }];
            _this.loading = false;
        });
    };
    PageComponent = __decorate([
        core_1.Component({
            selector: "page-sub",
            template: "\n    <div *ngIf=\"loading\">{{loading}}loading...</div>\n    <div class=\"weui_panel_bd\">\n      <a  *ngFor=\"let item of list\" href=\"javascript:void(0);\" class=\"weui_media_box weui_media_appmsg\">\n                <div class=\"weui_media_hd\">\n                    <img class=\"weui_media_appmsg_thumb\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==\" alt=\"\">\n                </div>\n                <div class=\"weui_media_bd\">\n                    <h4 class=\"weui_media_title\">\u6807\u9898\u4E00</h4>\n                    <p class=\"weui_media_desc\">\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002</p>\n                </div>\n            </a>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PageComponent);
    return PageComponent;
})();
exports.PageComponent = PageComponent;
//# sourceMappingURL=component.js.map
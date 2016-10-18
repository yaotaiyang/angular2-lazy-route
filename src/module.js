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
var platform_browser_1 = require('@angular/platform-browser');
var routing_1 = require("./routing");
var Menu_1 = require("./components/Menu");
var MainAppComponent = (function () {
    function MainAppComponent() {
    }
    MainAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div>\n   <title>angular2\u9996\u9875</title>\n    <menu></menu>\n    <router-outlet></router-outlet>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], MainAppComponent);
    return MainAppComponent;
})();
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routing_1.routing,
            ],
            declarations: [MainAppComponent, Menu_1.Menu],
            bootstrap: [MainAppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
})();
exports.MainModule = MainModule;
//# sourceMappingURL=module.js.map
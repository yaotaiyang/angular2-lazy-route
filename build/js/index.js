webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(248);
	__webpack_require__(260);
	const platform_browser_dynamic_1 = __webpack_require__(262);
	const main_module_1 = __webpack_require__(284);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_module_1.MainModule);

/***/ },

/***/ 2:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {function __assignFn(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s)
	            if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	    }
	    return t;
	}
	function __extendsFn(d, b) {
	    for (var p in b)
	        if (b.hasOwnProperty(p))
	            d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	function __decorateFn(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
	        r = Reflect.decorate(decorators, target, key, desc);
	    else
	        for (var i = decorators.length - 1; i >= 0; i--)
	            if (d = decorators[i])
	                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __metadataFn(k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
	        return Reflect.metadata(k, v);
	}
	function __paramFn(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function __awaiterFn(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try {
	            step(generator.next(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function rejected(value) { try {
	            step(generator.throw(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	}
	// hook global helpers
	(function (__global) {
	    __global.__assign = (__global && __global.__assign) || Object.assign || __assignFn;
	    __global.__extends = (__global && __global.__extends) || __extendsFn;
	    __global.__decorate = (__global && __global.__decorate) || __decorateFn;
	    __global.__metadata = (__global && __global.__metadata) || __metadataFn;
	    __global.__param = (__global && __global.__param) || __paramFn;
	    __global.__awaiter = (__global && __global.__awaiter) || __awaiterFn;
	})(typeof window !== "undefined" ? window :
	    typeof WorkerGlobalScope !== "undefined" ? self :
	        typeof global !== "undefined" ? global :
	            Function("return this;")());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(58);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(71);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(77);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(86);
	__webpack_require__(88);
	__webpack_require__(90);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(188);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(212);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	module.exports = __webpack_require__(10);

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	module.exports = __webpack_require__(10).Reflect;


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	const platform_browser_1 = __webpack_require__(282);
	const main_app_component_1 = __webpack_require__(285);
	const main_routing_1 = __webpack_require__(286);
	const main_home_component_1 = __webpack_require__(317);
	const main_about_component_1 = __webpack_require__(318);
	// import { SubHomeComponent } from "../sub/sub-home.component";
	// import { SubAppComponent } from "../sub/sub-app.component";
	let MainModule = class MainModule {};
	MainModule = __decorate([core_1.NgModule({
	    imports: [platform_browser_1.BrowserModule, main_routing_1.routing],
	    declarations: [main_app_component_1.MainAppComponent, main_home_component_1.MainHomeComponent, main_about_component_1.MainAboutComponent],
	    bootstrap: [main_app_component_1.MainAppComponent]
	}), __metadata('design:paramtypes', [])], MainModule);
	exports.MainModule = MainModule;

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	let MainAppComponent = class MainAppComponent {};
	MainAppComponent = __decorate([core_1.Component({
	  selector: 'my-app',
	  template: `
	  <div>
	    <h1>Angular2 Lazy Module Loading Demo</h1>
	    <a routerLink="/">Main Home</a>
	    <a routerLink="/about">Main About</a>
	    <a routerLink="/sub">Sub</a>
	    <router-outlet></router-outlet>
	  </div>
	  `
	}), __metadata('design:paramtypes', [])], MainAppComponent);
	exports.MainAppComponent = MainAppComponent;

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const router_1 = __webpack_require__(287);
	const main_home_component_1 = __webpack_require__(317);
	const main_about_component_1 = __webpack_require__(318);
	// import { SubAppComponent } from "../sub/sub-app.component";
	// import { SubHomeComponent } from "../sub/sub-home.component";
	// import { SubModule } from "../sub/sub.module";
	exports.appRoutes = [{ path: "", component: main_home_component_1.MainHomeComponent }, { path: "about", component: main_about_component_1.MainAboutComponent },
	/* 1. Simple nested routing: */
	// The fllowing configuration allows to nested routing
	// But the sub components are included bundle.js so the browser loads them on init.
	//
	// {
	//   path: "sub",
	//   component: SubAppComponent,
	//   children: [
	//     {path: "", component: SubHomeComponent}
	//   ]
	// },
	//
	/* 2. Separate sub modules and use load children callback function: */
	// See the loadSubModule function in this code.
	// {path: "sub", loadChildren: loadSubModule},
	/* 3. Auto switching module or moduleFactory with angular2-load-children-loader */
	// See the loader section of webpack.config.js .
	{ path: "sub", loadChildren: () => __webpack_require__(319)("SubModule") }];
	// export function loadSubModule(): any {
	//   // 2-1 Naive loading sub module:
	//   // It's synchronous loading
	//   // return SubModule;
	//
	//   // 2-2 Async module load with es6-promise-loader:
	//   // You can use create submodule's chunk with webpack es6-promise-loader.
	//   // However you should switch the module to laad with the context:
	//   // * JiT:
	//   // return require("es6-promise!../sub/sub.module")("SubModule");
	//   // * AoT:
	//   // return require("es6-promise!../sub/sub.module.ngfactory")("SubModuleNgFactory");
	// }
	exports.routing = router_1.RouterModule.forRoot(exports.appRoutes, { useHash: true });

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	let MainHomeComponent = class MainHomeComponent {};
	MainHomeComponent = __decorate([core_1.Component({
	  selector: "main-home",
	  template: `
	  <div>
	    <h2>Main Home Component</h2>
	  </div>
	  `
	}), __metadata('design:paramtypes', [])], MainHomeComponent);
	exports.MainHomeComponent = MainHomeComponent;

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	let MainAboutComponent = class MainAboutComponent {};
	MainAboutComponent = __decorate([core_1.Component({
	  selector: "main-about",
	  template: `
	  <div>
	    <h2>Main About Component</h2>
	  </div>
	  `
	}), __metadata('design:paramtypes', [])], MainAboutComponent);
	exports.MainAboutComponent = MainAboutComponent;

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	const sub_routing_1 = __webpack_require__(320);
	const sub_app_component_1 = __webpack_require__(321);
	const sub_home_component_1 = __webpack_require__(322);
	let SubModule = class SubModule {};
	SubModule = __decorate([core_1.NgModule({
	    imports: [sub_routing_1.subRouting],
	    declarations: [sub_app_component_1.SubAppComponent, sub_home_component_1.SubHomeComponent]
	}), __metadata('design:paramtypes', [])], SubModule);
	exports.SubModule = SubModule;

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const router_1 = __webpack_require__(287);
	const sub_app_component_1 = __webpack_require__(321);
	const sub_home_component_1 = __webpack_require__(322);
	exports.subRoutes = [{
	    path: "",
	    component: sub_app_component_1.SubAppComponent,
	    children: [{ path: "", component: sub_home_component_1.SubHomeComponent }]
	}];
	exports.subRouting = router_1.RouterModule.forChild(exports.subRoutes);

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	let SubAppComponent = class SubAppComponent {};
	SubAppComponent = __decorate([core_1.Component({
	    selector: "sub-home",
	    template: `
	    <h2>Sub App</h2>
	    <router-outlet></router-outlet>
	  `
	}), __metadata('design:paramtypes', [])], SubAppComponent);
	exports.SubAppComponent = SubAppComponent;

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	const core_1 = __webpack_require__(264);
	let SubHomeComponent = class SubHomeComponent {};
	SubHomeComponent = __decorate([core_1.Component({
	    selector: "sub-home",
	    template: `
	    <h3>Sub Home Component</h3>
	  `
	}), __metadata('design:paramtypes', [])], SubHomeComponent);
	exports.SubHomeComponent = SubHomeComponent;

/***/ }

});
//# sourceMappingURL=index.js.map
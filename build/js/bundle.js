webpackJsonp([2],{

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

__webpack_require__(631);
__webpack_require__(569);
__webpack_require__(570);
__webpack_require__(210);
const platform_browser_dynamic_1 = __webpack_require__(209);
const module_1 = __webpack_require__(567);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_1.MainModule);

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

const core_1 = __webpack_require__(1);
const platform_browser_1 = __webpack_require__(273);
const routing_1 = __webpack_require__(568);
let MainAppComponent = class MainAppComponent {};
MainAppComponent = __decorate([core_1.Component({
    selector: 'my-app',
    template: `
  <div>
    <h3>Angular2 Lazy Module Loading Demo</h3>
    <hr>
    <a routerLink="/">首页</a> |
    <a routerLink="/sub">sub页</a>
    <br />
    <router-outlet></router-outlet>
  </div>
  `
}), __metadata('design:paramtypes', [])], MainAppComponent);
let MainModule = class MainModule {};
MainModule = __decorate([core_1.NgModule({
    imports: [platform_browser_1.BrowserModule, routing_1.routing],
    declarations: [MainAppComponent],
    bootstrap: [MainAppComponent]
}), __metadata('design:paramtypes', [])], MainModule);
exports.MainModule = MainModule;

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

const router_1 = __webpack_require__(126);
exports.appRoutes = [{ path: "", loadChildren: () => __webpack_require__(611)("SubModule") }, { path: "sub", loadChildren: () => __webpack_require__(612)("SubModule") }];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes, { useHash: true });

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(430);
__webpack_require__(369);
__webpack_require__(371);
__webpack_require__(370);
__webpack_require__(373);
__webpack_require__(375);
__webpack_require__(380);
__webpack_require__(374);
__webpack_require__(372);
__webpack_require__(382);
__webpack_require__(381);
__webpack_require__(377);
__webpack_require__(378);
__webpack_require__(376);
__webpack_require__(368);
__webpack_require__(379);
__webpack_require__(383);
__webpack_require__(384);
__webpack_require__(336);
__webpack_require__(338);
__webpack_require__(337);
__webpack_require__(386);
__webpack_require__(385);
__webpack_require__(356);
__webpack_require__(366);
__webpack_require__(367);
__webpack_require__(357);
__webpack_require__(358);
__webpack_require__(359);
__webpack_require__(360);
__webpack_require__(361);
__webpack_require__(362);
__webpack_require__(363);
__webpack_require__(364);
__webpack_require__(365);
__webpack_require__(339);
__webpack_require__(340);
__webpack_require__(341);
__webpack_require__(342);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(345);
__webpack_require__(346);
__webpack_require__(347);
__webpack_require__(348);
__webpack_require__(349);
__webpack_require__(350);
__webpack_require__(351);
__webpack_require__(352);
__webpack_require__(353);
__webpack_require__(354);
__webpack_require__(355);
__webpack_require__(417);
__webpack_require__(422);
__webpack_require__(429);
__webpack_require__(420);
__webpack_require__(412);
__webpack_require__(413);
__webpack_require__(418);
__webpack_require__(423);
__webpack_require__(425);
__webpack_require__(408);
__webpack_require__(409);
__webpack_require__(410);
__webpack_require__(411);
__webpack_require__(414);
__webpack_require__(415);
__webpack_require__(416);
__webpack_require__(419);
__webpack_require__(421);
__webpack_require__(424);
__webpack_require__(426);
__webpack_require__(427);
__webpack_require__(428);
__webpack_require__(331);
__webpack_require__(333);
__webpack_require__(332);
__webpack_require__(335);
__webpack_require__(334);
__webpack_require__(320);
__webpack_require__(318);
__webpack_require__(324);
__webpack_require__(321);
__webpack_require__(327);
__webpack_require__(329);
__webpack_require__(317);
__webpack_require__(323);
__webpack_require__(314);
__webpack_require__(328);
__webpack_require__(312);
__webpack_require__(326);
__webpack_require__(325);
__webpack_require__(319);
__webpack_require__(322);
__webpack_require__(311);
__webpack_require__(313);
__webpack_require__(316);
__webpack_require__(315);
__webpack_require__(330);
__webpack_require__(123);
__webpack_require__(402);
__webpack_require__(407);
__webpack_require__(196);
__webpack_require__(403);
__webpack_require__(404);
__webpack_require__(405);
__webpack_require__(406);
__webpack_require__(387);
__webpack_require__(195);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(442);
__webpack_require__(431);
__webpack_require__(432);
__webpack_require__(437);
__webpack_require__(440);
__webpack_require__(441);
__webpack_require__(435);
__webpack_require__(438);
__webpack_require__(436);
__webpack_require__(439);
__webpack_require__(433);
__webpack_require__(434);
__webpack_require__(388);
__webpack_require__(389);
__webpack_require__(390);
__webpack_require__(391);
__webpack_require__(392);
__webpack_require__(395);
__webpack_require__(393);
__webpack_require__(394);
__webpack_require__(396);
__webpack_require__(397);
__webpack_require__(398);
__webpack_require__(399);
__webpack_require__(401);
__webpack_require__(400);
module.exports = __webpack_require__(35);

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(443);
__webpack_require__(444);
__webpack_require__(446);
__webpack_require__(445);
__webpack_require__(448);
__webpack_require__(447);
__webpack_require__(449);
__webpack_require__(450);
__webpack_require__(451);
module.exports = __webpack_require__(35).Reflect;


/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

module.exports = function (namespace) {
  return new Promise(function (resolve) {
    __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
      if (namespace) {
        resolve(__webpack_require__(468)[namespace]);
      } else {
        var mod = __webpack_require__(468);
        resolve(mod.__esModule ? mod.default : mod)
      }
    }).bind(null, __webpack_require__));
  });
}

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

module.exports = function (namespace) {
  return new Promise(function (resolve) {
    __webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
      if (namespace) {
        resolve(__webpack_require__(469)[namespace]);
      } else {
        var mod = __webpack_require__(469);
        resolve(mod.__esModule ? mod.default : mod)
      }
    }).bind(null, __webpack_require__));
  });
}

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(466);


/***/ }

},[632]);
//# sourceMappingURL=bundle.js.map
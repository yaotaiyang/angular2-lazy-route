var router_1 = require("@angular/router");
exports.appRoutes = [
    { path: "", loadChildren: "es6-promise!./views/home/module#SubModule" },
    { path: "sub", loadChildren: "es6-promise!./views/sub/module#SubModule" },
    { path: "me", loadChildren: "es6-promise!./views/me/module#SubModule" },
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes, { useHash: true });
//# sourceMappingURL=routing.js.map
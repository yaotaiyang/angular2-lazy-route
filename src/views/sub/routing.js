var router_1 = require("@angular/router");
var component_1 = require("./component");
//import { SubHomeComponent } from "./sub-home.component";
exports.subRoutes = [
    {
        path: "",
        component: component_1.PageComponent,
        children: []
    },
];
exports.subRouting = router_1.RouterModule.forChild(exports.subRoutes);
//# sourceMappingURL=routing.js.map
import { Routes, RouterModule } from "@angular/router";

export const appRoutes: Routes = [
    {path: "", loadChildren: "es6-promise!./views/home/home.module#SubModule" },
    {path: "sub", loadChildren: "es6-promise!./views/sub/sub.module#SubModule" },

];
export const routing = RouterModule.forRoot(appRoutes, {useHash: true});

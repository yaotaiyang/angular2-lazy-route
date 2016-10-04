import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
//import { SubHomeComponent } from "./sub-home.component";

export const subRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            //{ path: "", component: SubHomeComponent }
        ]
    },
];

export const subRouting = RouterModule.forChild(subRoutes);
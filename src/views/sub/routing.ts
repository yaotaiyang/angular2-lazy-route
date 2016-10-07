import { Routes, RouterModule } from "@angular/router";
import { PageComponent } from "./component";
//import { SubHomeComponent } from "./sub-home.component";

export const subRoutes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      //{ path: "", component: SubHomeComponent }
    ]
  },
];

export const subRouting = RouterModule.forChild(subRoutes);

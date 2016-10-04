import { Routes, RouterModule } from "@angular/router";
import { SubComponent } from "./sub.component";
//import { SubHomeComponent } from "./sub-home.component";

export const subRoutes: Routes = [
  {
    path: "",
    component: SubComponent,
    children: [
      //{ path: "", component: SubHomeComponent }
    ]
  },
];

export const subRouting = RouterModule.forChild(subRoutes);

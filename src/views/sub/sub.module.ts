import { NgModule } from "@angular/core";
import { subRouting } from "./sub.routing";
import { SubComponent } from "./sub.component";
//import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    SubComponent,
    //SubHomeComponent,
  ],
})
export class SubModule {
}

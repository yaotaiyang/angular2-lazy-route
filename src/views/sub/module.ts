import { NgModule } from "@angular/core";
import { subRouting } from "./routing";
import { PageComponent } from "./component";
//import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    PageComponent,
    //SubHomeComponent,
  ],
})
export class SubModule {
}

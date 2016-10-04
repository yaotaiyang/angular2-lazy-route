import { NgModule } from "@angular/core";
import { subRouting } from "./home.routing";
import { HomeComponent } from "./home.component";
//import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    HomeComponent,
    //SubHomeComponent,
  ],
})
export class SubModule {
}



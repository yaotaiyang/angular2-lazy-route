import { NgModule ,Component} from "@angular/core";
import { subRouting } from "./routing";
import { HttpModule } from '@angular/http';
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
  bootstrap:[PageComponent]
})
export class SubModule {
}



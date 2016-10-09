import { NgModule } from "@angular/core";
import { subRouting } from "./routing";
import { PageComponent } from "./component";
import { HttpModule} from '@angular/http';
import { CommonModule } from '@angular/common';
//import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
    HttpModule,
    CommonModule
  ],
  declarations: [
    PageComponent,
    //SubHomeComponent,
  ],
})
export class SubModule {
}

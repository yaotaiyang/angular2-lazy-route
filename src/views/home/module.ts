import { NgModule } from "@angular/core";
import { subRouting } from "./routing";
import { PageComponent } from "./component";
import { CommonModule } from '@angular/common';
//import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
    CommonModule
  ],
  declarations: [
    PageComponent,
    //SubHomeComponent,
  ],
})
export class SubModule {
}



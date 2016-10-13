import { NgModule ,Component} from "@angular/core";
import { subRouting } from "./routing";
import { HttpModule } from '@angular/http';
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
  bootstrap:[PageComponent]
})
export class SubModule {
}



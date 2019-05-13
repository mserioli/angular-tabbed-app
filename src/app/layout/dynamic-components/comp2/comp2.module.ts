
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Comp2 } from './comp2.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [Comp2],
  entryComponents: [Comp2]
})
export class Comp2Module {

}

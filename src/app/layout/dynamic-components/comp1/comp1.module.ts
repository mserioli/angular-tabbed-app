
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Comp1 } from './comp1.component';
import { Child } from './child.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [Comp1, Child],
  entryComponents: [ Comp1 ]
})
export class Comp1Module {

}

import { Home } from './home.component';
import { HomeButton } from './home-button.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [Home, HomeButton],
  entryComponents: [Home]
})
export class HomeModule {

}

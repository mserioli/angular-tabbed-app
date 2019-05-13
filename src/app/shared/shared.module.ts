import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faBinoculars, faSpinner, faFlask, faBackward, faSync } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [CommonModule, ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],

})
export class SharedModule {
  constructor(){
    library.add(faExternalLinkAlt, faBinoculars, faSpinner, faFlask, faBackward, faSync);
  } 
}

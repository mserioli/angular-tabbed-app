import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { Comp1Module } from './comp1/comp1.module';
import { Comp2Module } from './comp2/comp2.module';
import { Comp1 } from './comp1/comp1.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    SharedModule,
    Comp1Module,
    Comp2Module
  ],
  entryComponents: [Comp1]})
export class DynamicComponentsModule { }

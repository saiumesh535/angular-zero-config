import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { effects } from './effetcts';

@NgModule({
  imports: [EffectsModule.forRoot([...effects])],
})
export class EffectsModuler {}

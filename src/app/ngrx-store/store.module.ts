import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers: []
    }),
    StoreDevtoolsModule.instrument({
      name: 'Learn Angular',
      logOnly: true,
    }),

  ],
})
export class StoreModuler {}

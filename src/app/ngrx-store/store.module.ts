import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers: []
    }),
    StoreDevtoolsModule.instrument({
      name: 'Learn Angular',
      logOnly: environment.production,
    }),

  ],
})
export class StoreModuler {}

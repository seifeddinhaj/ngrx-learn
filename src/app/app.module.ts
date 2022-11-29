import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer, ROOT_FEATURE_KEY } from './state/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersData } from './api/users.data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        strictActionImmutability:true,
        strictStateImmutability:true
      }
    }),
    StoreDevtoolsModule.instrument({ name:'ngrx starter',maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(UsersData)
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

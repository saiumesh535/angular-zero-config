import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { router } from '../app.routing';
import { MaterialModule } from './app.styles';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ContentResolver } from './content/content.resolver';
import { StoreModuler } from './ngrx-store/store.module';
import { EffectsModuler } from './ngrx-effetcs/effetcs.module';
import { WelcomeResolver } from './welcome/welcome.resolver';
import { SearchInputComponent } from './search-input/search-input.component';
import { InnerHTMLPipe } from './pipes/inner-html.pipe';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
    NavigationComponent,
    ContentComponent,
    SearchInputComponent,
    InnerHTMLPipe,
  ],
  imports: [
    BrowserModule,
    router,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModuler,
    EffectsModuler,
    HighlightModule.forRoot({ theme: 'atom-one-dark'}),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ ContentResolver, WelcomeResolver, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }

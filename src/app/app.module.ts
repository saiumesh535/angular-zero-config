import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

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
import { AdminComponent } from './admin/admin.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { AdminLoginDialogComponent } from './admin-login-dialog/admin-login-dialog.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HomeComponent } from './home/home.component';
import { FilterPostsComponent } from './filter-posts/filter-posts.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowPostsResolver } from './show-posts/show-posts.resolver';
import { HttpService } from './services/httpService';

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
    AdminComponent,
    ToolbarComponent,
    CreatepostComponent,
    AdminLoginDialogComponent,
    HomeComponent,
    FilterPostsComponent,
    ShowPostsComponent,
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
    EditorModule,
    HttpClientModule,
  ],
  providers: [ ContentResolver, WelcomeResolver, AngularFirestore, ShowPostsResolver, HttpService ],
  entryComponents: [ AdminLoginDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

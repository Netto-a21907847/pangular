import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProjectModule } from './project/project.module';
import { EducationModule } from './education/education.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';

export const firebaseConfig = {
  apiKey: 'AIzaSyBJHrEbuKukJnayw7ydgamRLXUOzjf2PQc',
  authDomain: 'modeloangularpw1.firebaseapp.com',
  databaseURL: 'https://modeloangularpw1.firebaseio.com',
  projectId: 'modeloangularpw1',
  storageBucket: 'modeloangularpw1.appspot.com',
  messagingSenderId: '227930037505',
  appId: '1:227930037505:web:91fbed2176d36502c4cf00',
  measurementId: 'G-TX0XX8EVRP'
};

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ProjectModule,
    EducationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

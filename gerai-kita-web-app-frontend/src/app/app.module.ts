import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

const firebaseConfig = {
  apiKey: "AIzaSyBBcijBzrl9kdI9MwFOjkWmAkZNIm9vhXo",
  authDomain: "gerai-kita-web-app.firebaseapp.com",
  databaseURL: "https://gerai-kita-web-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gerai-kita-web-app",
  storageBucket: "gerai-kita-web-app.appspot.com",
  messagingSenderId: "657687063054",
  appId: "1:657687063054:web:0e8f5c29fdd4d7409aea5f",
  measurementId: "G-514S5MDYY8"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

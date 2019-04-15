import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpBackendService } from './http-backend.service';
import { HomePage, FavouritePage } from './pages';
import { InterceptedHttp } from './http.interceptor.service';
import { XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { httpFactory } from './app.factory.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent,HomePage,FavouritePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    HttpBackendService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: InterceptedHttp, useFactory: httpFactory, deps:[XHRBackend, RequestOptions] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

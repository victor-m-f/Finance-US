import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './layouts/side-nav-outer-toolbar/footer/footer.component';
import { SideNavOuterToolbarModule } from './layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component';
import { AppInfoService, AuthService, ScreenService, ThemeService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideNavOuterToolbarModule,
    FooterModule,
    UnauthenticatedContentModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    ThemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

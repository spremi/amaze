import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LooksModule } from './modules/looks/looks.module';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderComponent } from './parts/header/header.component';
import { LoginComponent } from './parts/login/login.component';
import { LogoutComponent } from './parts/logout/logout.component';
import { AboutComponent } from './routes/about/about.component';
import { BookletComponent } from './routes/booklet/booklet.component';
import { GalleryComponent } from './routes/gallery/gallery.component';
import { HomeComponent } from './routes/home/home.component';
import { PageComponent } from './routes/page/page.component';
import { ShowComponent } from './routes/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    BookletComponent,
    PageComponent,
    ShowComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

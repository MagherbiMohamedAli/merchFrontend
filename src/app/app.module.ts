import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoubleAuthComponent } from './double-auth/double-auth.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreationComponent } from './creation/creation.component';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from './services/interceptor/inter.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    DoubleAuthComponent,
    EditprofileComponent,
    NavbarComponent,
    CreationComponent,
    PanierComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

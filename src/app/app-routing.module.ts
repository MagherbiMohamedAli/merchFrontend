import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DoubleAuthComponent } from './double-auth/double-auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CreationComponent } from './creation/creation.component';
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:ConnexionComponent},
  {path:'signup',component:InscriptionComponent},
  {path:'dauth',component:DoubleAuthComponent},
  {path:'editp',component:EditprofileComponent},
  {path:'create',component:CreationComponent},
  {path:'panier',component:PanierComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

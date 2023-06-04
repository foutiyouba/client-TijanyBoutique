import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {ClientComponent} from "./client/client.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {LoginComponent} from "./login/login.component";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ProfilComponent } from './profil/profil.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
 //  { path: '', redirectTo: 'home', pathMatch:'full'  },
 // { path: '', component: HomeComponent },

   { path: 'accueil', component: AccueilComponent},
   { path: 'login', component: LoginComponent },
 // { path: '', component: AccueilComponent },
  { path: 'fournisseur', component: FournisseurComponent},
  { path: 'clients', component: ClientComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: '', component: InscriptionComponent},
 // { path: 'profil', component: ProfilComponent },
  { path: 'accueil', component: AccueilComponent,
    children: [{
      path: 'profil',
      component: ProfilComponent,
    }],
  },
  { path: 'accueil', component: AccueilComponent,
    children: [{
      path: 'fournisseur',
      component: FournisseurComponent,
    }],
  },
  { path: 'accueil', component: AccueilComponent,
    children: [{
      path: 'restaurant',
      component: RestaurantComponent,
    }],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



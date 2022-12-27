import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {ClientComponent} from "./client/client.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {TypeJellabeComponent} from "./type-jellabe/type-jellabe.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'jellabes', component: TypeJellabeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


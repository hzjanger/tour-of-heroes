import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './layout/heroes/heroes.component';
import {DashboardComponent} from './layout/dashboard/dashboard.component';
import {HeroDetailComponent} from './layout/hero-detail/hero-detail.component';
const routes: Routes = [
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

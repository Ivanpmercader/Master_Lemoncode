import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {  path: '' , redirectTo: 'home', pathMatch: 'full' },
  {  path: 'home', component: HomeComponent},
  {  path: 'login', component: LoginComponent},
  {  path: 'about', component: AboutComponent},
  {  path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {  path: 'galery', component: GaleryComponent, canActivate: [AuthGuard]},
  {  path: 'crud', component: CrudComponent, canActivate: [AuthGuard]},
  {  path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

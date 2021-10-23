import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { PublicMenuComponent } from './components/public-menu/public-menu.component';
import { PrivateMenuComponent } from './components/private-menu/private-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrudComponent } from './pages/crud/crud.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MemberDialogComponent } from './components/member-dialog/member-dialog.component';

//Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

//AuthGuard
import { AuthGuard } from './services/auth.guard';
import { RotateDirective } from './directives/rotate.directive';

const MATERIAL_UI: any[] = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    CrudComponent,
    GaleryComponent,
    ProfileComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RotateDirective,
    MemberDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MATERIAL_UI
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

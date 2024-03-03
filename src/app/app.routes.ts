import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'home', component: HomeComponent},
    {path:'aboutus', component: AboutusComponent}
];

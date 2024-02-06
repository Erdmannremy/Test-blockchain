import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './BlockchainTest/home/home.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { AuthuserComponent } from './authuser/authuser.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, ViewChildren } from '@angular/core';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
export const routes: Routes = [
    { path : '',redirectTo: 'home',pathMatch : 'full'},
    { path : 'home',component: HomeComponent },
    { path : 'signup',component: SignupComponent},
    { path : '404',component: NotfoundComponent},
    { path : '**',redirectTo: '404'},//page non trouver 404

];  

@NgModule({
    imports:[BrowserModule]
})
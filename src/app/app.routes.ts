import { Routes } from '@angular/router';
import { HomeComponent } from './BlockchainTest/home/home.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';

export const routes: Routes = [
    { path : '',redirectTo: 'home',pathMatch : 'full'},
    { path : 'home',component: HomeComponent},
    { path : '404',component: NotfoundComponent},
    { path : '**',redirectTo: '404'},//page non trouver 404

];  

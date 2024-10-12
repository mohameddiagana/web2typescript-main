import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

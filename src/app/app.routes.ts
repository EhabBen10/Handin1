import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home-module').then(m => m.HomeModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'cardscreen',
        loadComponent: () => import('./cardscreen/cardscreen.component').then(m => m.CardscreenComponent)
    }
];

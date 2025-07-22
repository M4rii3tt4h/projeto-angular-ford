import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => {
            return import('./pages/home/home.component')
                .then(C => C.HomeComponent)
        }
    },

    {
        path: "match",
        pathMatch: "full",
        loadComponent: () => {
            return import('./pages/match/match.component')
                .then(C => C.MatchComponent)
        }
    }

];

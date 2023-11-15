import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchComponent } from './components/match/match.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';

export const routes: Routes = [
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'match', title: 'Match', component: MatchComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNoFoundComponent }
];

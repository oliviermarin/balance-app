import { Routes } from '@angular/router';
import { AttendeesComponent } from './attendees/attendees.component'

export const ROUTES: Routes = [
    {path: '', redirectTo: 'attendees', pathMatch: 'full'},
    {path: 'attendees', component: AttendeesComponent}
];

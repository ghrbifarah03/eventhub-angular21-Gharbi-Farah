import { Routes } from '@angular/router';
import { EventList } from './event-list/event-list';
import { EventDetails } from './event-details/event-details';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'events/:id', component: EventDetails },
  {path: 'about', loadComponent: () => import('./about/about').then((c) => c.About)},
  { path: '**', component: NotFound },
];

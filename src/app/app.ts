import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { EventList } from './event-list/event-list';

@Component({
  selector: 'app-root',
  imports: [Header, EventList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

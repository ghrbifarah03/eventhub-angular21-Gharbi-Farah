import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EVENTS } from '../event-list/event-list';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-details',
  imports: [DatePipe, CurrencyPipe,RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {

   event?: (typeof EVENTS)[number];

  constructor(private act: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.act.snapshot.params['id']);
    this.event = EVENTS.find((e) => e.id === id);
  }
}

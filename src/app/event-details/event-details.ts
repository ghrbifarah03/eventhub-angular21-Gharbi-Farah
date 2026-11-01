import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { EventService, Event } from '../event-service';

@Component({
  selector: 'app-event-details',
  imports: [DatePipe, CurrencyPipe,RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {

   event?: Event;

  constructor(
    private act: ActivatedRoute,
    private eventService: EventService,
  ) {}

  ngOnInit() {
    const id = Number(this.act.snapshot.params['id']);
    this.event = this.eventService.getEventById(id);
  }
}

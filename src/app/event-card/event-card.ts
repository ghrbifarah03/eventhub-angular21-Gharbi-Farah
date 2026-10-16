import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-event-card',
  imports: [DatePipe, CurrencyPipe, NgClass],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<{
    id: number;
    title: string;
    category: string;
    date: string;
    place: string;
    price: number;
    imageUrl: string;
    description: string;
  }>();

  isFavorite = input(false);
  toggleFavorite = output<number>();

  onToggle() {
    this.toggleFavorite.emit(this.event().id);
  }
}
import { Component, computed, inject, signal } from '@angular/core';
import { EventCard } from '../event-card/event-card';
import { EventService } from '../event-service';


@Component({
  selector: 'app-event-list',
    imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
   eventService = inject(EventService);
  events = this.eventService.events;

  selectedCategory = signal('Tous');

  categories = ['Tous', 'Sport', 'Gaming', 'Musique'];

  filteredEvents = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Tous') {
      return this.events();
    }
    return this.events().filter((e) => e.category === category);
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  onToggleFavorite(id: number) {
    this.eventService.toggleFavorite(id);
  }

  isFavorite(id: number): boolean {
    return this.eventService.favorites().includes(id);
  }

    onDelete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet événement ?')) {
      this.eventService.deleteEvent(id);
      if (this.eventService.favorites().includes(id)) {
        this.eventService.toggleFavorite(id);
      }
    }
  }
}
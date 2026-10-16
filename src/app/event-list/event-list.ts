import { Component, computed, signal } from '@angular/core';
import { EventCard } from '../event-card/event-card';

export const EVENTS = [
{
      id: 1,
      title: 'Soirée Open Mic',
      category: 'Musique',
      date: '2026-11-14',
      place: 'Café du campus',
      price: 0,
      imageUrl: 'images/openmic.svg',
      description: 'Chante, rappe ou joue : le micro est ouvert à tous les talents',
    },
    {
      id: 2,
      title: 'Concert Live Campus',
      category: 'Musique',
      date: '2026-12-12',
      place: 'Amphi plein air',
      price: 20,
      imageUrl: 'images/concert.svg',
      description: 'Une soirée de concerts avec les meilleurs groupes étudiants',
    },
    {
      id: 3,
      title: 'Atelier TypeScript',
      category: 'Technologie',
      date: '2026-11-15',
      place: 'Salle Info',
      price: 0,
      imageUrl: 'images/typescript.svg',
      description: 'Découverte de TypeScript : types, variables et premiers exercices',
    },
    {
      id: 4,
      title: 'Hackathon 24h',
      category: 'Technologie',
      date: '2026-12-05',
      place: 'Salle Info',
      price: 10,
      imageUrl: 'images/hackathon.svg',
      description: 'Par équipes de 4, crée un prototype de projet en 24 heures',
    },
    {
      id: 5,
      title: 'Tournoi de Futsal',
      category: 'Sport',
      date: '2027-01-09',
      place: 'Terrain de sport',
      price: 5,
      imageUrl: 'images/futsal.svg',
      description: 'Tournoi inter-classes en équipes de 5',
    },
    {
      id: 6,
      title: 'Street Workout',
      category: 'Sport',
      date: '2027-01-23',
      place: 'Parc universitaire',
      price: 0,
      imageUrl: 'images/workout.svg',
      description: 'Une séance de callisthénie en plein air, tous niveaux',
    },];

@Component({
  selector: 'app-event-list',
    imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
    events = signal(EVENTS);

  favorites = signal<number[]>([]);

  favoritesCount = computed(() => this.favorites().length);

  onToggleFavorite(id: number) {
    this.favorites.update((list) =>
      list.includes(id) ? list.filter((x) => x !== id) : [...list, id],
    );
  }

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  selectedCategory = signal('Tous');

  categories = ['Tous', 'Musique', 'Sport', 'Technologie'];

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
}
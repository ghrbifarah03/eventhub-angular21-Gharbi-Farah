import { computed, Injectable, signal } from '@angular/core';
export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  place: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
   private _events = signal<Event[]>([
    {
      id: 1,
      title: 'Carthage Tkawer',
      category: 'Sport',
      date: '2026-11-14',
      place: 'IHEC Carthage',
      price: 30,
      imageUrl: 'images/carthage-tkawer.jpg',
      description:
        'Le tournoi de football étudiant où les équipes se battent pour la victoire dans une ambiance de supporters, de fair-play et de rivalité entre clubs.',
    },
    {
      id: 2,
      title: 'Paintball Game Battle',
      category: 'Sport',
      date: '2026-12-05',
      place: 'Laser Game Arena, Tunis',
      price: 45,
      imageUrl: 'images/paintball.jpg',
      description:
        'Forme ton équipe, équipe-toi de ton gilet et de ton pistolet, puis affronte tes amis dans une bataille immersive où stratégie, précision et esprit d’équipe feront la différence.',
    },
    {
      id: 3,
      title: 'Valorant Campus Clash',
      category: 'Gaming',
      date: '2026-11-21',
      place: 'Gaming Arena, La Soukra',
      price: 0,
      imageUrl: 'images/valo.jpg',
      description:
        'Forme une équipe de cinq joueurs, prépare tes stratégies et affronte les autres teams dans un tournoi compétitif de Valorant.',
    },
    {
      id: 4,
      title: 'League of Legends Showdown',
      category: 'Gaming',
      date: '2026-12-19',
      place: 'Institut français de Tunisie',
      price: 10,
      imageUrl: 'images/lol.jpg',
      description:
        'Draft, team fights et objectifs : affronte les meilleures équipes du tournoi et tente de remporter la finale sur la Faille de l’invocateur.',
    },
    {
      id: 5,
      title: 'Tunis Live Music Night',
      category: 'Musique',
      date: '2026-11-28',
      place: 'Cité de la Culture, Tunis',
      price: 0,
      imageUrl: 'images/music-night.jpg',
      description:
        'Une soirée de musique live réunissant de jeunes talents et des artistes tunisiens pour profiter de performances uniques dans une ambiance festive.',
    },
    {
      id: 6,
      title: 'Acoustic Vibes',
      category: 'Musique',
      date: '2027-01-16',
      place: 'B7L9 Art Centre, La Marsa',
      price: 15,
      imageUrl: 'images/Acoustic-Nights.jpg',
      description:
        'Installe-toi, profite d’une ambiance intimiste et découvre des performances acoustiques entre pop, indie et musique tunisienne.',
    },
  ]);

  private _favorites = signal<number[]>([]);

  events = this._events.asReadonly();
  favorites = this._favorites.asReadonly();
    eventCount = computed(() => this._events().length);
  favoriteCount = computed(() => this._favorites().length);
  freeEventCount = computed(() => this._events().filter((e) => e.price === 0).length);

    getEventById(id: number): Event | undefined {
    return this._events().find((e) => e.id === id);
  }

  addEvent(event: Omit<Event, 'id'>) {
    const newId = Math.max(0, ...this._events().map((e) => e.id)) + 1;
    this._events.update((list) => [...list, { ...event, id: newId }]);
  }

  deleteEvent(id: number) {
    this._events.update((list) => list.filter((e) => e.id !== id));
  }

  toggleFavorite(id: number) {
    this._favorites.update((list) =>
      list.includes(id) ? list.filter((x) => x !== id) : [...list, id],
    );
  }
}

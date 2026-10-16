# EventHub

## Description
Application Angular 21 qui permet de consulter les événements d'une association étudiante, d'afficher leurs détails, de les filtrer par catégorie et de gérer une sélection de favoris. Les données sont définies dans le code TypeScript. L'interface est responsive (ordinateur et téléphone) et suit automatiquement le thème clair ou sombre de l'appareil.

## Versions utilisées
- Angular CLI : 21.2.27
- @angular/core : 21.2.25
- Node.js : 24.22.0

## Installation et lancement
```bash
npm install
ng serve
```
Puis ouvrir http://localhost:4200

## Structure des composants
- **Header** : affiche le titre et le menu de navigation, avec la page active mise en évidence.
- **EventList** : contient la liste des événements, les favoris et la catégorie choisie, et affiche une carte par événement.
- **EventCard** : affiche les informations d'un événement et signale au parent un clic sur le bouton favori.
- **EventDetails** : récupère l'identifiant dans l'URL et affiche l'événement correspondant, ou un message s'il n'existe pas.
- **NotFound** : page affichée quand l'URL ne correspond à aucune route.
- **About** : page de présentation, chargée en lazy loading.

## Fonctionnalités réalisées
- Liste des événements avec @for et @empty
- Favoris avec compteur (Signals, input() et output())
- Filtre par catégorie
- Routage : /events, /events/:id, /about, page introuvable, redirection de l'URL vide
- Lazy loading de la page About
- Interface responsive et mode sombre automatique

## Design
- Palette : bleu méditerranéen, jaune soleil, blanc, corail pour les favoris, une couleur par catégorie.
- Polices : Bricolage Grotesque (titres) et Plus Jakarta Sans (texte).
- Styles partagés (couleurs, boutons, badges) dans `src/styles.css` via des variables CSS.


import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {
    categories = ['Sport', 'Gaming', 'Musique']; //selon les catégories que j'ai déjà dans mon events-list.
    eventForm!: FormGroup;
    ngOnInit() {
    
    this.eventForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      category : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    place : new FormControl('',[Validators.required,Validators.minLength(3)]),
    price : new FormControl(null,[Validators.required,Validators.min(0)]),
    imageUrl : new FormControl(''),
    description : new FormControl('',[Validators.required,Validators.minLength(20)]),
    });
    }

    get title() {
      return this.eventForm.get('title');
    }
    get category() {
      return this.eventForm.get('category');
    }
    get date() {
      return this.eventForm.get('date');
    }
    get place() {
      return this.eventForm.get('place');
    }
    get price() {
      return this.eventForm.get('price');
    }
    get imageUrl() {
      return this.eventForm.get('imageUrl');
    }
    get description() {
      return this.eventForm.get('description');
    } 
}

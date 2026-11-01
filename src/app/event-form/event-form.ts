import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css',
})
export class EventForm {
    categories = ['Sport', 'Gaming', 'Musique']; //selon les catégories que j'ai déjà dans mon events-list.
    eventForm!: FormGroup;
  formValue = signal<any>({});
  formStatus = signal<string>('INVALID');
constructor(private router: Router) {} 
     
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

     this.formValue.set(this.eventForm.value);
    this.formStatus.set(this.eventForm.status);

    this.eventForm.valueChanges.subscribe((v) => this.formValue.set(v));
    this.eventForm.statusChanges.subscribe((s) => this.formStatus.set(s));
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
      addEvent() {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    console.log('Événement à ajouter :', this.eventForm.value); // temporaire : remplacé à l'étape B5

    this.eventForm.reset();
    this.router.navigate(['/events']);
  }
}

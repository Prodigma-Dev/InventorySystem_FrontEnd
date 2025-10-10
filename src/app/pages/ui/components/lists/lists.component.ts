import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
    selector: 'app-lists',
    imports: [MatListModule, MatCardModule, DatePipe, MatIconModule, MaterialModule],
    templateUrl: './lists.component.html',
    animations: [fadeInUp]
})
export class ListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/24'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/24'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/24'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/24'),
    }
  ];
}

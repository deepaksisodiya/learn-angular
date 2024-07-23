import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WiseListComponent } from './wise-list/wise-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from './../shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WiseListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];

  filter: any;

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  async ngOnInit() {
    try {
      const response = await fetch('http://localhost:3000/wishes');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data: WishItem[] = await response.json();
      this.items = data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
}

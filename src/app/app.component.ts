import { Component } from '@angular/core';
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
export class AppComponent {
  items = [
    new WishItem('To Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  filter: any;

  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      // todo remove wish from items
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
}

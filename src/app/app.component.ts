import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WiseListComponent } from './wise-list/wise-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WiseListComponent,
    AddWishFormComponent,
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
  title = 'my wishlist';
  listFilter = 0;

  get visibleItems() {
    console.log('this.listFilter ', this.listFilter == 1);
    if (this.listFilter == 0) {
      return this.items;
    } else if (this.listFilter == 1) {
      return this.items.filter((item) => !item.isComplete);
    } else if (this.listFilter == 2) {
      return this.items.filter((item) => item.isComplete);
    }
    return [];
  }
}

import { Component, Input } from '@angular/core';
import { WishItem } from './../../shared/models/wishItem';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';

@Component({
  selector: 'app-wise-list',
  standalone: true,
  imports: [CommonModule, FormsModule, WishListItemComponent],
  templateUrl: './wise-list.component.html',
  styleUrl: './wise-list.component.css',
})
export class WiseListComponent {
  @Input() items: WishItem[] = [];
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}

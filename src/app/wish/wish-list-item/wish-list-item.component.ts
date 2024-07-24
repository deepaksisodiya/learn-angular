import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItem } from './../models/wishItem';
import { EventService } from './../../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  constructor(private events: EventService) {}

  @Input() wish!: WishItem;

  toggleFullFilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  get cssClasses() {
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }
}

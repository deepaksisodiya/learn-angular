import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import events from './../../shared/services/EventService';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string;
  @Input() fullfilled!: boolean;

  @Output() fullfilledChange = new EventEmitter();

  toggleFullFilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }

  get cssClasses() {
    return { 'strikeout text-muted': this.fullfilled };
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }
}

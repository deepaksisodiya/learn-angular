import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishModule } from './wish/wish.module';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishModule,
    WishComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}

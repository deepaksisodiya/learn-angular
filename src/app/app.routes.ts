import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'first', component: WishComponent },
  { path: 'second', component: ContactComponent },
];

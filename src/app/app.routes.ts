import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'first', component: WishComponent },
  { path: 'second', component: ContactComponent },
  { path: '**', component: NotfoundComponent },
];

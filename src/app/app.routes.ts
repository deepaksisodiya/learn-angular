import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

export const routes: Routes = [
  { path: '', component: WishComponent }, // Default route
  { path: 'first', component: WishComponent },
  { path: 'second', component: ContactComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: '**', component: NotfoundComponent }, // Wildcard route for a 404 page
];

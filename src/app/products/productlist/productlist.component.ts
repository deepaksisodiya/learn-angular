import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  standalone: true,
  templateUrl: './productlist.component.html',
  imports: [CommonModule],
})
export class ProductlistComponent implements OnInit {
  products: any[] = [];

  constructor(private store: ProductsService) {}

  ngOnInit(): void {
    this.store.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}

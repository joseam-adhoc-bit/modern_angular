import { MatIconModule } from '@angular/material/icon';
import { ProductsCard } from './../products-card/products-card';
import { Component, Signal } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../product';

@Component({
  imports: [ProductsCard,MatIconModule],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {

  protected readonly products = signal<Product[]>( [
    {
      id: 1,
      name: 'Headphone',
      description: 'Wireless, noise cancellation ,premium sound quality',
      price: 1199.99,
      originalPrice: 1249.99,
    },
        {
      id: 2,
      name: 'Watch',
      description: 'Smart watch, track fitness, heart monitoring',
      price: 1299.99,
    },
            {
      id: 3,
      name: 'Bluetooth Speaker',
      description: 'Compact, poerfull bass, 12 hrs battery life',
      price: 799.99,
      originalPrice: 899.99,
    },

  ]
  );
}

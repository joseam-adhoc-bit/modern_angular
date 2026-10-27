import { MatIconModule } from '@angular/material/icon';
import { ProductsCard } from './../products-card/products-card';
import { Component, computed, Signal } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../product';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [ProductsCard,MatIconModule , MatInputModule, FormsModule ],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {

  protected readonly searchTerm = signal('');

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

  protected readonly filteredProducts = computed(() : Product[]  => {
    const term= this.searchTerm().toLocaleLowerCase().trim();
      if(!term)
        return this.products();
      return this.products().filter((product) => product.name.toLocaleLowerCase().includes(term) ||
                                                 product.description.toLocaleLowerCase().includes(term)
                                   );
  }
);

  protected clearSearchText()
  {
    this.searchTerm.set('');
  }

  protected trimSearchText()
  {
    this.searchTerm.update((value) => value.trim());
  }

  protected onAddToCart(product: Product)
  {
    console.log('Added to cart',product.name);
  }
}

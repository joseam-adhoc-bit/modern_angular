import { Service } from '@angular/core';
import { signal } from '@angular/core';
import { Product } from '../products/product';

@Service()
export class CartService {
  private readonly cartItems= signal<Product[]>([]);

  addToCart(product:Product)
{
  console.log('Added to cart service',product.name);
  this.cartItems.update((items): Product[] => [...items,product]);
}

}

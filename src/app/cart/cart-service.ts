import { Service } from '@angular/core';
import { signal , computed } from '@angular/core';
import { Product } from '../products/product';
import { CartItem } from './cart-item';

@Service()
export class CartService {
  private readonly cartItems= signal<CartItem[]>([]);

    readonly totalItems = computed(() =>
      this.cartItems().reduce((total,item) => total + item.quantity,0 ));

  addToCart(product:Product)
{

  this.cartItems.update((items) =>{
    const existingItem = items.find((item) =>item.product.id===product.id);
    if (existingItem)
    {
      return items.map((item) =>
        item.product.id===product.id ? {...item,quantity:item.quantity+1} : item );
    }
      return [...items, {product,quantity:1}]
  }

);
/*   console.log('Added to cart service',product.name);
  this.cartItems.update((items): Product[] => [...items,product]); */
}

}

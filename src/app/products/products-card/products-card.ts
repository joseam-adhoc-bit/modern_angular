import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../product';

@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-products-card',
  styleUrl: './products-card.css',
  templateUrl: './products-card.html',
})
export class ProductsCard {
  readonly product_ = input.required<Product>();
  readonly addButtonLabel=input('Add to Cart')
}

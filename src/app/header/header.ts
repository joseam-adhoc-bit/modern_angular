import { Component , inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from '../cart/cart-service';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  imports: [MatToolbarModule, MatIconModule, MatButtonModule ,MatBadgeModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  protected readonly cartService = inject(CartService);
}

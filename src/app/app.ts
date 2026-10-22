import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ProductsGrid } from './products/products-grid/products-grid';

@Component({
  imports: [RouterOutlet, Header, ProductsGrid],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('modern_angular');
}

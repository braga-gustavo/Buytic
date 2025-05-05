import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports:[CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() produto!: Product;

}

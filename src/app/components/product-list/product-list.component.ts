import { ProductService } from './../../services/product.services';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categoria: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const categoriaParam = params.get('categoria');
      if (categoriaParam) {
        this.categoria = categoriaParam;
        this.loadProducts();
      }
    });
  }

  loadProducts(): void {
    this.productService
      .getProdutsByCategory(this.categoria)
      .subscribe((produtos) => {
        this.products = produtos;
      });
  }
}

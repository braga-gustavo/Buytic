import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { provideClientHydration } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Espelho retro',
      description: 'Um espelho com moldura antiga',
      price: 270.0,
      image: 'https://via.placeholder.com/1500',
      category: 'decoracao',
      badge: 'Promoção',
    },
    {
      id: 2,
      name: 'Playstation 4',
      description: 'Videogame ',
      price: 1500.0,
      image: 'https://via.placeholder.com/1500',
      category: 'Eletronicos',
      badge: 'Novo',
    },
    {
      id: 3,
      name: 'Casaco corta-vento',
      description:
        'Casaco grande e confortável que protege bem do frio e do vento',
      price: 10000.0,
      image: 'https://via.placeholder.com/1500',
      category: 'Roupas',
    },
  ];

  getProdutsByCategory(category: string): Observable<Product[]> {
    return of(this.mockProducts.filter(p => p.category === category));
  }

  getProductsById(id: number): Observable<Product[]>{
    return of (this.mockProducts.filter(p => p.id === id));
  }
 }

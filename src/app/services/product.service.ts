// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  heroImage: string;
  description: string;
  applications: string[];
  stoneTypes: any[]; 

}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  // Esta función es idéntica a tu getProyectoPorId
  getProductById(id: string): Observable<Product | undefined> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      //map((products: Product[]) => products.find(product => product.id === id))
      map(products => products.find(product => product.id === id))
    );
  }
}
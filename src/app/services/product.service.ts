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
  nota: string;
}

export interface Project {
  id: string;
  name: string;
  galleryThumbnail: string;
  heroImage: string;
  location: string;
  nota: string;
  description: {
    applications: string;
    materials: string;
  };
  galleryImages: string[];
  featuredMaterialLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) { }

  // --- Funciones de Productos (ya existentes) ---
  getProductById(id: string): Observable<Product | undefined> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((products: Product[]) => products.find(product => product.id === id))
    );
  }

  // --- NUEVAS FUNCIONES AÑADIDAS PARA PROYECTOS ---

  // Obtiene la lista de todos los proyectos para la galería principal
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  // Obtiene un proyecto específico por su ID para la página de detalle
  getProjectById(id: string): Observable<Project | undefined> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      //map((projects: Project[]) => projects.find(project => project.id === id))
      map(products => products.find(product => product.id === id))
    );
  }
}

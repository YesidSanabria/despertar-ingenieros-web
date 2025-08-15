import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule para los links
import { ProductService, Project } from '../../services/product.service'; // Importa el servicio y la interfaz

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule], // Añade RouterModule
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css']
})
export class ProyectosComponent implements OnInit {
  projects: Project[] = []; // Array para guardar la lista de proyectos

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Al iniciar el componente, pedimos todos los proyectos al servicio
    this.productService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService, Project } from '../../services/product.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements OnInit {
  projects: Project[] = []; // Array para guardar la lista de proyectos

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Al iniciar el componente, pedimos todos los proyectos al servicio
    this.productService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
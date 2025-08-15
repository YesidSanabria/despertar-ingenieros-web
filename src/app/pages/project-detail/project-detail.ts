import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Importa RouterModule
import { ProductService, Project } from '../../services/product.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-project-detail',
  standalone: true,
  // Importamos los módulos necesarios para las directivas del HTML
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetailComponent implements OnInit {
  // Definimos la propiedad 'project' que el HTML necesita
  project: Project | undefined;
  errorCarga: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.productService.getProjectById(projectId).subscribe(data => {
        this.project = data;
      });
    }
  }
}
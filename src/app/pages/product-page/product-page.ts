import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-page.html',
  styleUrls: ['./product-page.css']
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;
  errorCarga: string | null = null; // Para mensajes de error
  descripcionFormateada = '';     // Para la descripción con <br>

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Usamos .paramMap.subscribe para reaccionar a cambios en la URL
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id'); // Usamos 'id' como en nuestras rutas

      if (productId) {
        this.productService.getProductById(productId).subscribe({
          next: (loadedProduct) => {
            this.product = loadedProduct;
            if (!this.product) {
              // Caso: el producto con ese ID no se encontró en el JSON
              this.errorCarga = 'El producto solicitado no fue encontrado.';
              this.descripcionFormateada = '';
            } else {
              // Formateamos la descripción para respetar los saltos de línea
              this.descripcionFormateada = this.product.description.replace(/\n/g, '<br>');
              this.errorCarga = null; // Limpiamos errores previos
            }
          },
          error: (err) => {
            // Caso: hubo un error al cargar el archivo JSON
            console.error('Error al cargar el producto:', err);
            this.errorCarga = 'Ocurrió un error al cargar los datos del producto.';
          }
        });
      } else {
        // Caso: la URL no contenía un ID
        this.errorCarga = 'No se especificó un producto.';
      }
    });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

import { HeaderComponent } from './components/header/header';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ContactFormComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'indumarmol-web';
  showContactForm = true; // Por defecto, lo mostramos

  constructor(private router: Router) {
    // Escuchamos los cambios de ruta
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Si la URL es '/proveedores', ocultamos el formulario.
      // Si no, lo mostramos.
      if (event.urlAfterRedirects === '/proveedores') {
        this.showContactForm = false;
      } else {
        this.showContactForm = true;
      }
    });
  }
}
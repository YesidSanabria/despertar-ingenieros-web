import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Importa TODOS tus componentes aquí
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './app.html', // Corregido
  styleUrl: './app.css'      // Corregido
})
export class AppComponent {
  title = 'indumarmol-web';
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HeaderComponent } from './components/header/header'; 
import { ContactFormComponent } from './pages/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HeaderComponent, 
    ContactFormComponent, 
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  
  showContactForm: boolean = true;

  private routesToHideForm = [
    '/servicios/contacto',
    '/tratamiento-datos',
    '/'
  ];

  // 2. INYECTA EL ROUTER EN EL CONSTRUCTOR
  constructor(private router: Router) {}

  // 3. USA ngOnInit PARA SUSCRIBIRTE A LOS EVENTOS
  ngOnInit(): void {
    this.router.events.pipe(
      // Filtra solo los eventos de tipo NavigationEnd
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      
      // 4. LÓGICA PARA MOSTRAR/OCULTAR
      const currentUrl = event.urlAfterRedirects;
      
      // Comprueba si la URL actual está en la lista de rutas a ocultar
      if (this.routesToHideForm.includes(currentUrl)) {
        this.showContactForm = false; // Si está en la lista, ocúltalo
      } else {
        this.showContactForm = true; // Si no, muéstralo
      }
    });
  }
}
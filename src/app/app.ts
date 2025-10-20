import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'; // <-- Importar Header
import { FooterComponent } from './components/footer/footer';
import { ContactFormComponent } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ContactFormComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'despertar-ingenieros-web';
 showContactForm = true;
}
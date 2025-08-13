import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../components/hero/hero';
import { GalleryComponent } from '../../components/gallery/gallery';
import { ContactFormComponent } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    GalleryComponent,
    ContactFormComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
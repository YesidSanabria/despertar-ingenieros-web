import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../components/hero/hero';
import { GalleryComponent } from '../../components/gallery/gallery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    GalleryComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
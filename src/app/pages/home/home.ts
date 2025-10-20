// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

}
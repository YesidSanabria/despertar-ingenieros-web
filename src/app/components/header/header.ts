import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  isDropdownOpen = false;

  // Productos que hay en el menú
  products = [
    { name: 'Granito', link: '#productos' },
    { name: 'Quarzita', link: '#productos' },
    { name: 'Mármol', link: '#productos' },
    { name: 'Piedra Bali', link: '#productos' },
    { name: 'Lava Stone', link: '#productos' },
    { name: 'Areniscas', link: '#productos' },
    { name: 'Travertino', link: '#productos' },
    { name: 'Calizas', link: '#productos' },
    { name: 'Ónix', link: '#productos' },
    { name: 'Mosaicos', link: '#productos' }
  ];

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cierra el menú si se hace clic fuera de él
  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
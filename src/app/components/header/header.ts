import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  isDropdownOpen = false;

  // Productos que hay en el menú
  products = [
    { id: 'marmol', name: 'Mármol' },
    { id: 'granito', name: 'Granito' },
    { id: 'quarzita', name: 'Quarzita' },
    { id: 'piedrabali', name: 'Piedra Bali' },
    { id: 'lavastone', name: 'Lava Stone' },
    { id: 'areniscas', name: 'Areniscas' },
    { id: 'travertino', name: 'Travertino' },
    { id: 'calizas', name: 'Calizas' },
    { id: 'onix', name: 'Ónix' },
    { id: 'mosaicos', name: 'Mosaicos' },
  ];

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }


  scrollToContact(event: MouseEvent): void {
    event.preventDefault();
    
    const contactSection = document.getElementById('contacto');
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
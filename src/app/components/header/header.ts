import { CommonModule } from '@angular/common';
import { Component, HostListener, ElementRef } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent {
  isDropdownOpen = false;
  isServiciosActive = false;

  servicios = [
    { id: 'mantenimientopreventivo', name: 'Mantenimiento Preventivo' },

  ];

 constructor(private eRef: ElementRef, private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isServiciosActive = event.urlAfterRedirects.startsWith('/servicios');
    });
  }

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
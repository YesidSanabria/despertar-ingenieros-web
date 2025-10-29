import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})

export class ContactoFormComponent {
  
  handleSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    fetch('/', {
      method: 'POST',
      body: formData
    })
    .then(() => {
      form.reset();
      alert('¡Consulta enviada! Gracias por contactarnos.');
    })
    .catch((error) => {
      alert('Hubo un error al enviar el formulario.');
    })
    .finally(() => {
      submitButton.disabled = false;
      // Restauramos el texto original CON el ícono
      submitButton.innerHTML = 'Enviar <i class="fas fa-paper-plane"></i>';
    });
  }
}
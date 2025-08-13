import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactFormComponent {
  fileError: string | null = null;
  readonly allowedFileTypes = [
    'image/png', 'image/jpeg', 'application/pdf', 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (!file) {
      this.fileError = null;
      return;
    }
    if (this.allowedFileTypes.includes(file.type)) {
      this.fileError = null;
    } else {
      this.fileError = 'Archivo no valido. Por favor, selecciona un archivo permitido.';
      event.target.value = null;
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button') as HTMLButtonElement;

    if (this.fileError) {
      alert(this.fileError);
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    fetch('/', {
      method: 'POST',
      body: formData
    })
    .then(() => {
      form.reset();
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    })
    .catch((error) => {
      alert('Hubo un error al enviar el formulario.');
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'Contáctanos';
    });
  }
}
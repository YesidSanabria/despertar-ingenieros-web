import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedores-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedores.html',
  styleUrls: ['./proveedores.css']
})
export class ProveedoresComponent {
  fileError: string | null = null;
  // Lista de archivos permitidos (incluyendo PDF para el catálogo)
  readonly allowedFileTypes = [
    'image/png', 'image/jpeg', 
    'application/pdf', 
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  //Validacion del tipo de archivo (funciona para cualquier input de archivo)
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (!file) {
      this.fileError = null;
      return;
    }
    if (this.allowedFileTypes.includes(file.type)) {
      this.fileError = null;
    } else {
      this.fileError = 'Archivo no valido. Por favor, selecciona un archivo permitido. (png, pdf,jpeg, Word, Excel)';
      event.target.value = null;
    }
  }

  //Envio del formulario
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
      alert('¡Gracias por tu información! La revisaremos y nos pondremos en contacto.');
    })
    .catch((error) => {
      alert('Hubo un error al enviar el formulario.');
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Información'; // Texto original del botón de proveedores
    });
  }
}
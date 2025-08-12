import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { ContactForm } from "./components/contact-form/contact-form";
import { Gallery } from "./components/gallery/gallery";
import { Hero } from "./components/hero/hero";
import { HeaderComponent } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, ContactForm, Gallery, Hero, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indumarmol-web');
}

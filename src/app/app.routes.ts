import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { PoliticaTratamientoDatosComponent } from './pages/politica-tratamiento-datos/politica-tratamiento-datos';
import { ContactFormComponent } from './pages/contact/contact';

export const routes: Routes = [

    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'tratamiento-datos', component: PoliticaTratamientoDatosComponent },
    {path: 'contacto', component: ContactFormComponent},
    
    { path: '', component: HomeComponent },

];
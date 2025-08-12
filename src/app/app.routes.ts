// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { PoliticaGarantiaComponent } from './pages/politica-garantia/politica-garantia';
import { PoliticaTratamientoDatosComponent } from './pages/politica-tratamiento-datos/politica-tratamiento-datos';
import { ProveedoresComponent } from './pages/proveedores/proveedores';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'politica-garantia', component: PoliticaGarantiaComponent },
    { path: 'politica-tratamiento-datos', component: PoliticaTratamientoDatosComponent },
    { path: 'proveedores', component: ProveedoresComponent },
];
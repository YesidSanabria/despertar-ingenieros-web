import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { PoliticaGarantiaComponent } from './pages/politica-garantia/politica-garantia';
import { PoliticaTratamientoDatosComponent } from './pages/politica-tratamiento-datos/politica-tratamiento-datos';
import { ProveedoresComponent } from './pages/proveedores/proveedores';
import { ProductPageComponent } from './pages/product-page/product-page';

export const routes: Routes = [
    
    { path: 'productos/:id', component: ProductPageComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'politica-garantia', component: PoliticaGarantiaComponent },
    { path: 'tratamiento-datos', component: PoliticaTratamientoDatosComponent },
    { path: 'proveedores', component: ProveedoresComponent },

    { path: '', component: HomeComponent },

    
];
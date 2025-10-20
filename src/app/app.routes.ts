import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { PoliticaTratamientoDatosComponent } from './pages/politica-tratamiento-datos/politica-tratamiento-datos';
import { ContactFormComponent } from './pages/contact/contact';
import { RedesBajaTension } from './pages/servicios/baja-tension/baja-tension';
import { CertiRetie } from './pages/servicios/certi-retie/certi-retie';
import { MantenimientoPrev } from './pages/servicios/mantenimiento-prev/mantenimiento-prev';
import { MediaTension } from './pages/servicios/media-tension/media-tension';
import { ObrasCiviles } from './pages/servicios/obras-civiles/obras-civiles';

export const routes: Routes = [

    {path: 'servicios/redes-de-baja-tension', component: RedesBajaTension},
    {path: 'servicios/redes-de-media-tension', component: MediaTension},
    {path: 'servicios/certificaciones-retie', component: CertiRetie},
    {path: 'servicios/mantenimiento-preventivo', component: MantenimientoPrev},
    {path: 'servicios/obras-civiles', component: ObrasCiviles},
    {path: 'quienes-somos', component: QuienesSomosComponent },
    {path: 'tratamiento-datos', component: PoliticaTratamientoDatosComponent },
    {path: 'contacto', component: ContactFormComponent},
    
    {path: '', component: HomeComponent },

];
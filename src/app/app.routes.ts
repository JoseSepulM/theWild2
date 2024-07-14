import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';

export const routes: Routes = [
    { path : 'login' , component : LoginComponent },
    { path : 'contenido' , component : ContenidoComponent },
    { path : 'usuarios', component: UsuariosComponent },
    { path : 'consultas', component : ConsultasComponent},
    { path : 'comunidad', component : ComunidadComponent},
    { path : '**', redirectTo : 'login' }
];

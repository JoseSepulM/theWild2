import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
export const routes: Routes = [
    { path : 'login' , component : LoginComponent },
    { path : 'contenido' , component : ContenidoComponent },
    { path : 'usuarios', component: UsuariosComponent },
    { path : '**', redirectTo : 'login' }
];

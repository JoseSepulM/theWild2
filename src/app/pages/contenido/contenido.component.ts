import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { NavbarContentComponent } from '../../components/navbar-content/navbar-content.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [NavbarContentComponent, DashboardComponent, UsuariosComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.scss'
})
export class ContenidoComponent implements OnInit{

    constructor(private router : Router){}

    ngOnInit(): void {
    }

}



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarContentComponent } from '../../components/navbar-content/navbar-content.component';
import { UsuariosService } from '../../services/usuarios.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-usuarios',
    standalone: true,
    imports: [NavbarContentComponent, CommonModule, FormsModule, HttpClientModule],
    templateUrl: './usuarios.component.html',
    styleUrl: './usuarios.component.scss',
    providers : [ UsuariosService ]
})
export class UsuariosComponent implements OnInit {

    personas : any[] = [];
    username: string = '';
    correo : string = '';
    rol: string = '';
    password : string = '';
    showModal : boolean =  false;
    showModalEdit : boolean = false;

    constructor(private usuariosService : UsuariosService){}

    ngOnInit(): void{
        this.usuariosService.getJsonData().subscribe(data=>{
            this.personas = data;
        })
    }

    eliminar(username : string): void{

        const index = this.personas.findIndex((elemento : any) => elemento.username === username);
        if (index !== -1) {
            this.personas.splice(index, 1);
            this.usuariosService.MetodoPersona(this.personas);
          } else {
            window.alert('El elemento de la lista no existe');
          }
    }

    agregarPersona() : void {
        this.showModal = true;
    }

    hideModal() : void {
        this.showModal = false;
    }

    hideModalEdit() : void {
        this.showModalEdit = false;
    }

    submitFormAdd() : void {
        const nuevaPersona = {
            username: this.username,
            correo: this.correo,
            role: this.rol,
            password: this.password
        };

        this.personas.push(nuevaPersona);
        this.usuariosService.MetodoPersona(this.personas);
        this.hideModal();
    }


    editarUsuario(persona : any) : void {
        this.username = persona.username;
        this.correo = persona.correo;
        this.rol = persona.role;
        this.password = persona.password;

        this.showModalEdit = true;
    }


    submitFormEdit() : void {

        const personaEdit = {
            username: this.username,
            correo: this.correo,
            role: this.rol,
            password: this.password
        };
        const index = this.personas.findIndex((elemento: any) => elemento.username === personaEdit.username);
    
        if (index !== -1) {
            this.personas[index].username = this.username;
            this.personas[index].correo = this.correo;
            this.personas[index].role = this.rol;
            this.personas[index].password = this.password;
            this.usuariosService.MetodoPersona(this.personas);
            this.showModalEdit = false;

        } else {
        window.alert('El elemento de la lista no existe');
        }
    }
}

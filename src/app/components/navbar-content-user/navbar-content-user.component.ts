import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar-content-user',
  standalone: true,
  imports: [],
  templateUrl: './navbar-content-user.component.html',
  styleUrl: './navbar-content-user.component.scss'
})
export class NavbarContentUserComponent implements OnInit {

    @Input() titleNavBar: string = 'The wild';

    constructor ( private router : Router){}

    ngOnInit(): void {
    }

    salir(): void {
        this.router.navigate(['login']);
    }

    goToComunidad():void{
        this.router.navigate(['comunidad']);
    }

    goToMisConsultas():void{
        this.router.navigate(['consultas']);
    }

}

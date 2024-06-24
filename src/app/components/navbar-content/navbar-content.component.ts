import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  standalone: true,
  imports: [],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss'
})
export class NavbarContentComponent implements OnInit {

    @Input() titleNavBar : string = 'The Wild';


    constructor(private router : Router){}

    ngOnInit(): void {
    }

    salir(): void{
        this.router.navigate(['login']);
    }

}

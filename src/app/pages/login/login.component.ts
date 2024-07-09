import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { data_dataUsuarios } from '../../../data/login-helper-data';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {

    @ViewChild('itemLogin', { static: true }) itemLogin!: ElementRef;
    @ViewChild('itemRegister', { static: true }) itemRegister!: ElementRef;
    @ViewChild('dvLogin', { static: true }) dvLogin!: ElementRef;
    @ViewChild('dvRegister', { static: true }) dvRegister!: ElementRef;
    @ViewChild('linkRegistro', { static: true }) linkRegistro!: ElementRef;
    @ViewChild('linkContrasenia', { static: true }) linkContrasenia!: ElementRef;
    @ViewChild('liveToast', { static: true }) liveToast!: ElementRef;
    @ViewChild('txtNombreUsuario', { static: true }) txtNombreUsuario!: ElementRef;
    @ViewChild('txtClaveSecreta', { static: true }) txtClaveSecreta!: ElementRef;

    miFormulario!: FormGroup;
    imgLogin: string;

    constructor(
        private renderer: Renderer2,
        private router: Router,
        private fb: FormBuilder

    ) {
        this.imgLogin = "assets/images/photoLogin.png";
    }

    ngOnInit(): void {

        this.showHideCards();
        this.recuperarContrasenia();
        this.miFormulario = this.fb.group({
            nombre: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            pass: ['', Validators.required]
        })


    }

    submitForm(): void {

        if (this.miFormulario.valid) {
        }
        else {
            this.markAllAsTouched();
        }
    }

    markAllAsTouched() {
        Object.values(this.miFormulario.controls).forEach((control: AbstractControl | null) => {
            if (control) {
                control.markAsTouched();
            }
        });
    }

    showHideCards(): void {
        const itemLoginEl = this.itemLogin.nativeElement;
        const itemRegisterEl = this.itemRegister.nativeElement;
        const dvLoginEl = this.dvLogin.nativeElement;
        const dvRegisterEl = this.dvRegister.nativeElement;
        const linkRegistroEl = this.linkRegistro.nativeElement;

        this.renderer.listen(itemLoginEl, 'click', () => {
            this.renderer.removeClass(itemRegisterEl, 'active');
            this.renderer.addClass(itemLoginEl, 'active');
            this.renderer.removeClass(dvLoginEl, 'd-none');
            this.renderer.addClass(dvRegisterEl, 'd-none');
        });

        this.renderer.listen(itemRegisterEl, 'click', () => {
            this.renderer.addClass(itemRegisterEl, 'active');
            this.renderer.removeClass(itemLoginEl, 'active');
            this.renderer.addClass(dvLoginEl, 'd-none');
            this.renderer.removeClass(dvRegisterEl, 'd-none');
        });

        this.renderer.listen(linkRegistroEl, 'click', () => {
            this.renderer.addClass(itemRegisterEl, 'active');
            this.renderer.removeClass(itemLoginEl, 'active');
            this.renderer.addClass(dvLoginEl, 'd-none');
            this.renderer.removeClass(dvRegisterEl, 'd-none');
        });
    }

    recuperarContrasenia(): void {
        // const linkContraseniaEl = this.linkContrasenia.nativeElement;
        // const modalRecuperarContraseniaEl = this.modalRecuperarContrasenia.nativeElement;

        // this.renderer.listen(linkContraseniaEl, 'click', () => {
        //   const modal = new bootstrap.Modal(modalRecuperarContraseniaEl);
        //   modal.show();
        // });
    }

    login(): void {

        const user = this.txtNombreUsuario.nativeElement.value;
        const pass = this.txtClaveSecreta.nativeElement.value;

        const sessionUser = data_dataUsuarios.find(element => element.username === user);
        if (sessionUser) {
            if (sessionUser.password == pass) {
                this.router.navigate(['contenido']);
            }
        }
        else {
            alert("Not found");
        }
    }
}





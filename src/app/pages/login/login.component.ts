import { Component, OnInit, Renderer2, ElementRef, ViewChild  } from '@angular/core';
import { data_dataUsuarios } from '../../../data/login-helper-data';
import { Router } from '@angular/router';

@Component({ 
    selector: 'app-login',
    standalone: true,
    imports: [],
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
    @ViewChild('txtNameUserRegister', { static: true }) txtNameUserRegister!: ElementRef;
    @ViewChild('txtCorreoUserRegister', { static: true }) txtCorreoUserRegister!: ElementRef;


    imgLogin : string;

    constructor(
        private renderer : Renderer2,
        private router  : Router

    ){
        this.imgLogin = "assets/images/photoLogin.png"
    }

    ngOnInit(): void {

        this.showHideCards();
        this.recuperarContrasenia();
        this.validateEmailRegister();
        this.validateNameUserRegister();
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
        this.router.navigate(['contenido']);


        // const buttonLoginEl = this.buttonLogin.nativeElement;
        // const liveToastEl = this.liveToast.nativeElement;
        // this.renderer.listen(buttonLoginEl, 'click', () => {
        //     const user = this.txtNombreUsuario.nativeElement.value;
        //     const pass = this.txtClaveSecreta.nativeElement.value;
        
        //     // const sessionUser = data_dataUsuarios.find(element => element.username === user);
        //     // if (sessionUser) {
        //     //     if (sessionUser.password === pass) {
        //     //     window.location.href = sessionUser.role === 'admin' ? 'contenido.html' : 'contenidoUsers.html';
        //     //     } else {
        //     //     // const toast = new bootstrap.Toast(liveToastEl);
        //     //     // toast.show();
        //     //     }
        //     // } else {
        //     //     // const toast = new bootstrap.Toast(liveToastEl);
        //     //     // toast.show();
        //     // }
        // });
    }

    validateNameUserRegister(): void {
        const inputUserEl = this.txtNameUserRegister.nativeElement;
    
        this.renderer.listen(inputUserEl, 'keyup', () => {
          const textInput = inputUserEl.value;
          if (textInput !== '') {
            const user = data_dataUsuarios.filter(element => element.username === textInput);
            if (user.length === 0) {
              this.renderer.removeClass(inputUserEl, 'is-invalid');
              this.renderer.addClass(inputUserEl, 'is-valid');
            } else {
              this.renderer.removeClass(inputUserEl, 'is-valid');
              this.renderer.addClass(inputUserEl, 'is-invalid');
            }
          } else {
            this.renderer.removeClass(inputUserEl, 'is-valid');
            this.renderer.removeClass(inputUserEl, 'is-invalid');
          }
        });
    }

    validateEmailRegister(): void {
        const inputEmailEl = this.txtCorreoUserRegister.nativeElement;
        this.renderer.listen(inputEmailEl, 'keyup', () => {
            const textInput = inputEmailEl.value;
            if (textInput !== '') {
                const user = data_dataUsuarios.filter(element => element.correo === textInput);
                if (user.length === 0) {
                this.renderer.removeClass(inputEmailEl, 'is-invalid');
                this.renderer.addClass(inputEmailEl, 'is-valid');
                } else {
                this.renderer.removeClass(inputEmailEl, 'is-valid');
                this.renderer.addClass(inputEmailEl, 'is-invalid');
                }
            } else {
                this.renderer.removeClass(inputEmailEl, 'is-valid');
                this.renderer.removeClass(inputEmailEl, 'is-invalid');
            }
        });
    }
}





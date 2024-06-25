import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarContentComponent } from './navbar-content.component';
describe('NavbarComponent', () => {
  let componente: NavbarContentComponent;
  let fixture: ComponentFixture<NavbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContentComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarContentComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(componente).toBeTruthy();
  });

  it('debería mostrar el título correcto en la barra de navegación', () => {
    componente.titleNavBar = 'Título de Prueba';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.navbar-brand');
    expect(titleElement?.textContent).toContain('Título de Prueba');
  });

  it('debería llamar al método salir al hacer clic en el botón de salir', () => {
    spyOn(componente, 'salir');
    const compiled = fixture.nativeElement as HTMLElement;
    const botonSalir = compiled.querySelector('#btn_salir') as HTMLButtonElement;
    botonSalir.click();
    expect(componente.salir).toHaveBeenCalled();
  });
});

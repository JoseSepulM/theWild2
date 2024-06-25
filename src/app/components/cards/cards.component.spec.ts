import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
    let componente: CardsComponent;
    let fixture: ComponentFixture<CardsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [CardsComponent] // Importa el componente standalone
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardsComponent);
        componente = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debería crear el componente', () => {
        expect(componente).toBeTruthy();
    });

    it('debería mostrar el texto correcto en el cuerpo', () => {
        componente.bodyText = 'Texto de prueba en el cuerpo';
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const spanTextInfo = compiled.querySelector('.spn_text_info');
        expect(spanTextInfo?.textContent).toContain('Texto de prueba en el cuerpo');
    });

    it('debería aplicar la clase correcta al encabezado de la tarjeta', () => {
        componente.cardClass = 'clase-de-prueba';
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const cardHeaderDiv = compiled.querySelector('div.card div');
        expect(cardHeaderDiv?.classList).toContain('clase-de-prueba');
    });
});

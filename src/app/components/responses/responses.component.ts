import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-responses',
    standalone: true,
    imports: [],
    templateUrl: './responses.component.html',
    styleUrl: './responses.component.scss'
})
export class ResponsesComponent {

    @Input() username : string = 'test';
    @Input() response : string = 'test';
    @Input() classname : string = '';
}

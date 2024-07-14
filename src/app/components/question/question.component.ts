import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-question',
    standalone: true,
    imports: [],
    templateUrl: './question.component.html',
    styleUrl: './question.component.scss'
})
export class QuestionComponent {

    @Input() titleQuestion: string = 'Test';
    @Input() textQuestion: string = 'Test';
    @Output() questionClicked = new EventEmitter<void>();

    onQuestionClick() {
        this.questionClicked.emit();
    }

}

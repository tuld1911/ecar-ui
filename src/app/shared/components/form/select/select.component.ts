import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Option {
    value: string;
    label: string;
}

@Component({
    selector: 'app-select',
    imports: [CommonModule, FormsModule],
    templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit, OnChanges {
    @Input() options: Option[] = [];
    @Input() placeholder: string = 'Select an option';
    @Input() className: string = '';
    @Input() defaultValue: string = '';
    @Input() value: string = '';

    @Output() valueChange = new EventEmitter<string>();

    ngOnInit() {
        if (!this.value && this.defaultValue) {
            this.value = this.defaultValue;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['value'] && !changes['value'].firstChange) {
            this.value = changes['value'].currentValue; // cap nhat lai neu cha doi value
        }
    }

    onChange(event: any) {
        console.log(event);
        this.value = event;
        this.valueChange.emit(event);
    }
}


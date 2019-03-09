import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true
    }
  ]
})
export class InputControlComponent implements OnInit, ControlValueAccessor {

  @Input() myLabel: string = '';
  counter: number = 0;
  value: string = '';
  isDisabled: boolean;

  onChange = (_:any) => { }
  onTouch = () => { }

  constructor() { }

  ngOnInit() {
  }

  onInput(value: string) {
    this.counter = value.length;
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}

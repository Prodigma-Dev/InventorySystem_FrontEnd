import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { fadeInUp } from 'src/app/shared/animations/fade-in-up.animation';

@Component({
  selector: 'app-center-two-step',
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './center-two-step.component.html',
  animations: [fadeInUp]
})
export class CenterTwoStepComponent {

  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;
  @ViewChild('goButton') goButton!: ElementRef;

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      digits: this.fb.array([
        this.fb.control(null),
        this.fb.control(null),
        this.fb.control(null),
        this.fb.control(null),
        this.fb.control(null),
      ])
    });
  }

  onInput(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;
  
    value = value.replace(/\D/g, '').slice(0, 1);
    input.value = value;
  
    const formArray = this.form.get('digits') as FormArray;
    formArray.at(index).setValue(value || null);
  
    if (value && index < this.inputs.toArray().length - 1) {
      this.inputs.toArray()[index + 1].nativeElement.focus();
    }
  }
  
  onKeyDown(index: number, event: KeyboardEvent) {
    const inputsArr = this.inputs.toArray();
    const formArray = this.form.get('digits') as FormArray;
  
    if (event.key === 'Backspace') {
      const currentInput = inputsArr[index].nativeElement;
      if (!currentInput.value && index > 0) {
        const prevInput = inputsArr[index - 1].nativeElement;
        prevInput.focus();
        prevInput.value = '';
        formArray.at(index - 1).setValue(null);
      }
    }
  }
  
  onPaste(index: number, event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text') || '';
    const digitsOnly = pastedText.replace(/\D/g, '').slice(0, 5);
  
    const formArray = this.form.get('digits') as FormArray;
    
    for (let i = 0; i < digitsOnly.length; i++) {
      formArray.at(i).setValue(digitsOnly[i]);
      this.inputs.toArray()[i].nativeElement.value = digitsOnly[i];
    }
  
    const nextIndex = digitsOnly.length < 5 ? digitsOnly.length : 4;
    setTimeout(() => {
      if (nextIndex < this.inputs.length) {
        this.inputs.toArray()[nextIndex].nativeElement.focus();
      } else {
        this.goButton.nativeElement.focus();
      }
    });
  
    event.preventDefault();
  }
  
  submit() {
    this.router.navigate(['/']);
  }

  get digitsCtrl() {
    return (this.form.get('digits') as FormArray).controls;
  }
}

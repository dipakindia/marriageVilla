import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-validate-fields-submit-form',
  templateUrl: './validate-fields-submit-form.component.html',
  styles: []
})
export class ValidateFieldsSubmitFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      birth_palace: [null, Validators.required],
      dob: [null, Validators.required],
      birth_time: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
      complexion: [null, Validators.required],
      education: [null, Validators.required],
      profession: [null, Validators.required],
      currently_working: [null, Validators.required],
      hobbies: [null, Validators.required],
      cast: [null, Validators.required],
      sub_cast: [null, Validators.required],
      gotra: [null, Validators.required],
      maththab: [null, Validators.required],
      speak_urdu: [null, Validators.required],
      namaz: [null, Validators.required],
      fasting: [null, Validators.required],
      hijab_after_marriage: [null, Validators.required],
      quran: [null, Validators.required],
      occupation: [null, Validators.required],
      father: [null, Validators.required],
      mother: [null, Validators.required],
      brother: [null, Validators.required],
      sister: [null, Validators.required],
      phone_no: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
     /* address: this.formBuilder.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required]
      })*/
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('successfully form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.form.reset();
  }
}

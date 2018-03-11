import { LoadingFormComponent } from './../add-personal-info/loading-form';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
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
  styles: ['.form-group {width: 49%; display: inline-flex; margin-bottom: 10px;}button.btn {background: #369;padding: 10px 30px !important; display: inline-flex; width: 125px; margin: 20px; text-align: center; color: #fff; font-size: 15px;}']
})
export class ValidateFieldsSubmitFormComponent implements OnInit {
  form: FormGroup;
  loading:boolean = false;
  public com : string;
  constructor(private data_service:DataService,private formBuilder: FormBuilder,private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.com = localStorage.getItem('set_community');
    localStorage.setItem('footer','no');
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
      cast: '',
      sub_cast: '',
      gotra: '',
      maththab: '',
      speak_urdu: '',
      namaz: '',
      fasting: '',
      hijab_after_marriage: '',
      quran: '',
      occupation: [null, Validators.required],
      father: [null, Validators.required],
      mother: [null, Validators.required],
      brother: [null, Validators.required],
      sister: [null, Validators.required],
      phone_no: [null, Validators.required],
      name_of_the_church: '',
      caste_preference: '',
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
      var formData = this.form.value;
    var data = {
      'personel_details': {
        'name': formData.name,
        'date_of_birth': formData.dob,
        'birth_palace': formData.birth_palace,
        'birth_time': formData.birth_time
      },
      "physical_attributes":{
        "height": formData.height,
        "weight": formData.weight,
        "complexion": formData.comlexion
      },
      "qualification": {
        "education": formData.education,
        "profession": formData.profession,
        "currently_working": formData.currently_working,
        "hobbies": formData.hobbies
      },
      "religion":{
        "cast": formData.cast,
        "sub_cast": formData.sub_cast,
        "gotra": formData.gotra,
        "maththab": formData.maththab,
        "speak_urdu": formData.speak_urdu,
        "namaz": formData.namaz,
        "fasting": formData.fasting,
        "hijab_after_marriage": formData.hijab_after_marriage,
        "quran": formData.quran
      },
      "occupation":formData.occupation,
      "family_details":{
        "father": formData.father,
        "mother": formData.mother,
        "sister": formData.sister,
        "brother": formData.brother
      },
      "contact_details":{
        "phone_no": formData.phone_no,
        "email": formData.email
      },
      "beliefs":{
        "name_of_the_church": formData.name_of_the_church,
        "caste_preference": formData.caste_preference
      }
    }
    this.loading = true;
    let dialogRef = this.dialog.open(LoadingFormComponent, {
      width: '350px',
      height: '350px',
      data: ''
    });
    this.data_service.addBioDataInformation(data).subscribe((res: Response) => {
      if(res.status == 1){
        this.dialog.closeAll();
        this.router.navigate(['/payment']);
      }else{
        this.loading = false;
      }
      return res;
  });
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

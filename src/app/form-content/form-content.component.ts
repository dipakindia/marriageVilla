import { Component, OnInit,Input } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css']
})
export class FormContentComponent implements OnInit {
  options: FormGroup;
  myform: FormGroup;
  name: FormControl;
  dob: FormControl;
  birth_palace: FormControl;
  birth_time:FormControl;
  height:FormControl;
  weight:FormControl;

  complexion:FormControl;
  education:FormControl;
  profession:FormControl;
  currently_working:FormControl;
  hobbies:FormControl;
  cast:FormControl;
  sub_cast:FormControl;
  gotra:FormControl;
  maththab:FormControl;
  speak_urdu:FormControl;
  namaz:FormControl;
  fasting:FormControl;
  hijab_after_marriage:FormControl;
  quran:FormControl;
  occupation:FormControl;
  father:FormControl;
  mother:FormControl;
  brother:FormControl;
  sister:FormControl;
  phone_no:FormControl;
  email:FormControl;
  name_of_the_church:FormControl;
  caste_preference:FormControl; 

  public verifyEmail:any;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    const urlRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const urlRegexpASS = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/);
    this.name = new FormControl('', [
        Validators.required,
        Validators.minLength(1),
    ]);
      this.dob = new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]);
      this.birth_palace = new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]);
/*       this.terms = new FormControl('', [
        Validators.required,
      ]); */
      this.birth_time = new FormControl('',
        [Validators.required]
      );

      this.height = new FormControl('',
        [Validators.required]
      );

      this.weight = new FormControl('',
        [Validators.required]
      );

      this.complexion = new FormControl('',
        [Validators.required]
      );

      this.education = new FormControl('',
        [Validators.required]
      );

      this.profession = new FormControl('',
        [Validators.required]
      );

      this.currently_working = new FormControl('',
        [Validators.required]
      );

      this.hobbies = new FormControl('',
        [Validators.required]
      );

      this.cast = new FormControl('',
        [Validators.required]
      );

      this.sub_cast = new FormControl('',
        [Validators.required]
      );

      this.gotra = new FormControl('',
        [Validators.required]
      );

      this.maththab = new FormControl('',
        [Validators.required]
      );

      this.speak_urdu = new FormControl('',
        [Validators.required]
      );

      this.namaz = new FormControl('',
        [Validators.required]
      );

      this.fasting = new FormControl('',
        [Validators.required]
      );

      this.hijab_after_marriage = new FormControl('',
        [Validators.required]
      );

      this.quran = new FormControl('',
        [Validators.required]
      );

      this.occupation = new FormControl('',
        [Validators.required]
      );

      this.father = new FormControl('',
      [Validators.required]
    );

    this.mother = new FormControl('',
      [Validators.required]
    );

    this.brother = new FormControl('',
      [Validators.required]
    );

    this.sister = new FormControl('',
      [Validators.required]
    );

    this.phone_no = new FormControl('',
      [Validators.required]
    );

    this.email = new FormControl('',
    [Validators.required]
  );

  this.name_of_the_church = new FormControl('',
    [Validators.required]
  );

  this.caste_preference = new FormControl('',
    [Validators.required]
  );
     

 }

 createForm() {
    this.myform = new FormGroup({
      name: this.name,
      dob:this.dob,
      birth_palace: this.birth_palace,
      birth_time: this.birth_time, 
      height: this.height,
      weight:this.weight,     
      complexion:this.complexion,
      education:this.education,
      profession:this.profession,
      currently_working:this.currently_working,
      hobbies:this.hobbies,
      cast:this.cast,
      sub_cast:this.sub_cast,
      gotra:this.gotra,
      maththab:this.maththab,
      speak_urdu:this.speak_urdu,
      namaz:this.namaz,
      fasting:this.fasting,
      hijab_after_marriage:this.hijab_after_marriage,
      quran:this.quran,
      occupation:this.occupation,
      father:this.father,
      mother:this.mother,
      sister:this.sister,
      brother:this.brother,
      phone_no:this.phone_no,
      email:this.email,
      name_of_the_church:this.name_of_the_church,
      caste_preference:this.caste_preference,









    });
 }


  onSubmit() {
    if (this.myform.valid) {
      //alert(JSON.stringify(this.myform.value) + "Form Submitted!");
      //this.loading = true;
     var data = {
        email: this.myform.value.workEmail, 
        password: this.myform.value.userPassword,
        name: this.myform.value.fullName,
        phone: this.myform.value.mobileNumber
      }
      console.log(data)
    }
  }
}

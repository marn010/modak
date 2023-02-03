import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.sass']
})
export class FormBoxComponent {
  personalInfoGroup = this._formBuilder.group({
    date: ['', Validators.required],
    Gender: ['', Validators.required],
    ID: ['', Validators.required],
    
  });
  
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required]
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}
  
  
}

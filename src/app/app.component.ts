import { Component, VERSION, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = true;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      dateofbirth: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
    });
  }
}

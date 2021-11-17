import { Component, VERSION, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isEditable = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      dateofbirth: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({});
    this.fourthFormGroup = this._formBuilder.group({
      phonenos: ['', Validators.required],
    });
  }
  openSnackBar() {
    console.log('hello');
    this._snackBar.open('Submitted Successfully', 'ok');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;
  myControl: FormControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [

      ]),

      edad: new FormControl('', [

      ]),
      password: new FormControl('', [

      ]),
      password_repeat: new FormControl('')
    }, [

      ]);
  }


  ngOnInit() {
  }

}

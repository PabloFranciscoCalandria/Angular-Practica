import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    // Formulario de plantilla

    // public usuario: any = {
    //   nombre: '',
    //   email: ''
    // }

    // enviar(){
    //   console.log(this.usuario);
    // }


    // Formulario de tipo reactivo

    formularioContacto: FormGroup

    constructor( private form: FormBuilder){
      this.formularioContacto = this.form.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    hasErrors(controlName: string, errorType: string){
      return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
    }

    enviar(){
      console.log(this.formularioContacto);
      
    }
}

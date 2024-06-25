import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

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
    tipoDni: string = 'DNI';
    
    // Hacemos de cuenta que lo traemos de otro lado al usuarioActivo
    // usuarioActivo: any = {
    //   nombre: 'Juan',
    //   apellido: 'Perez',
    //   dni: '25984635'
    // }

    constructor( private form: FormBuilder){
      this.formularioContacto = this.form.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        apellido: [''],
        tipoDni: [''],
        dni: [''],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    // ngOnInit con validaciones, seteos, disables
    // ngOnInit(): void {
      // Podemos hacer los validators aca dentro 
      // this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)]);
      // this.formularioContacto.get('dni')?.setValidators([Validators.required, Validators.minLength(8)]);

      // Para sacar las validaciones
      // this.formularioContacto.get('apellido')?.clearValidators();
      // this.formularioContacto.get('apellido')?.updateValueAndValidity();

      // Esto hace que el valor ya venga seteado y no se pueda modificar

      //Con este get setValue nos deja setear de a 1 solo input
      // this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo);
      
      //Para setear mas de un campo lo hacemos de la siguiente manera
      // this.formularioContacto.patchValue({
      //   nombre: this.usuarioActivo.nombre,
      //   apellido: this.usuarioActivo.apellido,
      //   dni: this.usuarioActivo.dni
      // })
      // this.formularioContacto.get('nombre')?.disable();
      // this.formularioContacto.get('apellido')?.disable();
      // this.formularioContacto.get('dni')?.disable();
    // }

    // ngOnInit con subscripciones
    ngOnInit(): void {
      // Escucha todo lo que hace el formulario
      this.formularioContacto.get('tipoDni')?.valueChanges.subscribe((valor) => {
        this.tipoDni = valor;
      });
    }

    hasErrors(controlName: string, errorType: string){
      return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
    }

    enviar(){
      console.log(this.formularioContacto);
      
    }
}

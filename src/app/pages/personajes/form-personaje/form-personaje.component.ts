import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-form-personaje',
  templateUrl: './form-personaje.component.html',
  styleUrls: ['./form-personaje.component.css']
})
export class FormPersonajeComponent {

  public formPersonaje: FormGroup;
  
  constructor( private formBuilder: FormBuilder) {
    this.buildForm();
   }

  private buildForm(): void{
    this.formPersonaje = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      especie: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      genero: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      habilidades: ['', [Validators.required, Validators.requiredTrue]],
      //habilidadesCampo: this.addHabilidadesControl(),
      estado: ['', [Validators.required]],
    });

    // this.formPersonaje.valueChanges
    // .pipe(
    //   debounceTime(500)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }



  public save(event: Event): void{
    event?.preventDefault(); //cancela el comportamiento por defecto de recargar la página una vez se envía los datos del formulario
    if (this.formPersonaje.valid) {
      const value = this.formPersonaje.value;
      console.log(value);
    } else {
      this.formPersonaje.markAllAsTouched();//ya no bloqueo la opción de enviar el formulario por medio del boton si este no ha sido validado,
                                            //sino que se permite enviar el formulario, pero una vez enviado, se marcan todos los campos como
                                            //tocados y como no se cumple la condición se mantiene hasta que este sea valido completamente.
    }
    
  }

  /**
   * Los getters harán que no haya tanto código repetido en el html
   * En caso de requerir cambiar el nombre del campo, solo se haría acá.
   */

  get campoNombre(){
    return this.formPersonaje.get('nombre');
  }

  get campoEspecie(){
    return this.formPersonaje.get('especie');
  }

  get campoGenero(){
    return this.formPersonaje.get('genero');
  }

  get campoOrigen(){
    return this.formPersonaje.get('origen');
  }
  
  get campoEstado(){
    return this.formPersonaje.get('estado');
  }


}

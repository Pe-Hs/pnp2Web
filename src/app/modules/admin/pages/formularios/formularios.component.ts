import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  controlForm: FormGroup | any;

  typeElement: any

  formData = {
    "formTitle": "Mi Formulario",
    "formDescription": "Este es un formulario de ejemplo.",
    "formFields": [
      {
        "label": "Selecciona tu país",
        "type": "select",
        "required": true,
        "options": [
          "Estados Unidos",
          "Canadá",
          "México",
          "Otro"
        ]
      },
      {
        "label": "Nombre",
        "type": "text",
        "required": true,
        "placeholder": "Ingresa tu nombre"
      },
      {
        "label": "Correo electrónico",
        "type": "email",
        "required": true,
        "placeholder": "Ingresa tu correo electrónico"
      },
      {
        "label": "Telefono",
        "type": "textarea",
        "required": true,
        "placeholder": "Ingresa tu Telefono"
      },
      
    ]
  };


  constructor() { }

  ngOnInit(): void {
    this.controlForm = new FormGroup(
      {

      }
    )
  }

}

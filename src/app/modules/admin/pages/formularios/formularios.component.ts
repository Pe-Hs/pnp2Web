import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IndicacionesGeneralesComponent } from '../../componentes/indicaciones-generales/indicaciones-generales.component';

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


  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.controlForm = new FormGroup(
      {

      }
    )
  }

  showIndicaciones(){
    const matDialogConfig = new MatDialogConfig();

    matDialogConfig.disableClose = true;

    this.matDialog.open( IndicacionesGeneralesComponent ,matDialogConfig)
  }

}

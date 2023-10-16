import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha-uno',
  templateUrl: './ficha-uno.component.html',
  styleUrls: ['./ficha-uno.component.css']
})
export class FichaUnoComponent implements OnInit {

  controlForm1 : FormGroup | any
  controlForm2 : FormGroup | any
  disableDisca = new FormControl(false)

  tipoDocList = [
    {tipo: "DNI"},
    {tipo: "Carnet Extranjeria",},
    {tipo: "No Tiene ni recuerda el Numero",},
    {tipo: "Otro",},
  ]

  tipoDisList = [
    {tipo: "Fisica",},
    {tipo: "Visual",},
    {tipo: "Auditiva",},
    {tipo: "Psicosocial",},
    {tipo: "Intelectual",},
  ]

  listLengua = [
    {tipo: "Castellano",},
    {tipo: "Quechua",},
    {tipo: "Aymara",},
    {tipo: "Otro",},
  ]

  isEditable = true;

  constructor() { }

  ngOnInit(): void {

    this.controlForm1 = new FormGroup({
      nombreCompleto : new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apePaterno: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apeMaterno: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      edad : new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      nroDocumento : new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      nroHijos : new FormControl('',[Validators.pattern('^[0-9]+$')]),
      tipoDoc: new FormControl('',[Validators.required]),
      ocupa: new FormControl('',[Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      discap : new FormControl({value: '', disabled: this.disableDisca.value! },[Validators.required]),
      tipoLengua : new FormControl('',[Validators.required]),
      especLengua : new FormControl('',[Validators.required]),
    })


    this.controlForm2 = new FormGroup({
      secondCtrl: new FormControl('', [Validators.required])
    })
    
  }

}

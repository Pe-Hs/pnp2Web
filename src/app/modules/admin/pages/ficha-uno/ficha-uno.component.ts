import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha-uno',
  templateUrl: './ficha-uno.component.html',
  styleUrls: ['./ficha-uno.component.css']
})
export class FichaUnoComponent implements OnInit {

  controlForm1: FormGroup | any
  controlForm2: FormGroup | any
  controlForm3: FormGroup | any
  controlForm4: FormGroup | any

  disableDisca = new FormControl(false)

  toggleDivPuntaje = false

  puntajeScore = 0

  colorRiesgo = ""
  textRiesgo = "--"

  tipoDocList = [
    { tipo: "DNI" },
    { tipo: "Carnet Extranjeria", },
    { tipo: "No Tiene ni recuerda el Numero", },
    { tipo: "Otro", },
  ]

  tipoDisList = [
    { tipo: "Fisica", },
    { tipo: "Visual", },
    { tipo: "Auditiva", },
    { tipo: "Psicosocial", },
    { tipo: "Intelectual", },
  ]

  listLengua = [
    { tipo: "Castellano", },
    { tipo: "Quechua", },
    { tipo: "Aymara", },
    { tipo: "Otro", },
  ]

  preguntasValoracion = [
    {
      preg: "¿En el último año, la violencia física contra usted ha aumentado en gravedad o frecuencia? ",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él tiene algún arma o podría conseguir un arma con facilidad? (pistola, cuchillo, machete, u otros)",
      ptj: 5,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Han vivido juntos durante el último año? (si dice NO, pasar a pregunta 5)",
      ptj: 4,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "Usted me dice que han vivido juntos en el último año. ¿Siguen viviendo juntos o lo ha dejado?  [si siguen viviendo juntos marcar 'SI'; si luego de vivir juntos lo ha dejado marcar 'NO']",
      ptj: 0,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Actualmente, él  tiene trabajo estable? (si ella no sabe, no marcar nada]",
      ptj: 4,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Alguna vez él ha usado o la ha amenazado con un arma (pistola, cuchillo, machete u otros)? ",
      ptj: 3,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "Si su respuesta fue “SI”, ¿fue con una pistola o cuchillo?",
      ptj: 0,
      addInput: true,
      inputText: "",
      checked: false
    },
    {
      preg: "¿La ha amenazado con matarla?",
      ptj: 3,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Alguna vez usted lo denunció por violencia familiar (porque él le pegó) ante la comisaría, fiscalía, juzgado o ante alguna autoridad comunal",
      ptj: 3,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él la ha obligado alguna vez a tener relaciones sexuales?",
      ptj: 2,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él ha intentado ahorcarla?",
      ptj: 2,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él consume drogas? Por ejemplo, como la marihuana, pasta básica, cocaína u otras. ",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él es alcohólico o tiene problemas con el alcohol (trago o licor)? ",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Le controla la mayoría o todas sus actividades diarias? Por ejemplo, no le deja que vea a sus familiares o amistades, le controla cuánto dinero puede gastar, etc.",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "Si él trata de controlarla pero ella no lo permite, márquelo aqui",
      ptj: 0,
      addInput: true,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él se pone celoso de forma constante y violenta? Por ejemplo, le dice: “si no eres mía, no serás de nadie” u otras similares.",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Cuándo usted estuvo embarazada, alguna vez él la golpeó? ",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Alguna vez él ha amenazado o ha intentado suicidarse?",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él la ha amenazado con hacerle daño a sus hijos?",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Cree que él es capaz de matarla? ",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Él realiza alguna de las siguientes acciones?: La llama insistentemente, le deja mensajes en su teléfono o én redes sociales o destruye sus cosas (celular, ropa u otro).",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },
    {
      preg: "¿Alguna vez usted ha intentado o ha amenazado con quitarse la vida?",
      ptj: 1,
      addInput: false,
      inputText: "",
      checked: false
    },

  ]

  anexoPreguntas = {
    "formTitle": "Factores de Vulnerabilidad",
    "formDescription": "Formulario de los factores",
    "formFields": [
      {
        "subTitle": "Violencia economica o patrimonial",
        "indicacion" : "",
        "preguntas": [
          {
            "label": "Seleccione Opcion",
            "text": "¿Depende economicamente de su pareja?",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
              "COMPARTIMOS GASTOS",
            ]
          },
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja o ex pareja cumple puntualmente con atender los gastos de alimentación suyo y/o de sus hijos/as",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
            ]
          },
          {
            "label": "Seleccione Opcion",
            "text": "¿Piensa o tuvo que interponerle una demanda de alimentos?",
            "type": "select",
            "required": true,
            "options": [
              "SI PIENSA INTERPONER DEMANDA",
              "SI, YA INTERPUSO DEMANDA",
              "NO"
            ]
          },
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja o expareja ha realizado o realiza acciones para apropiarse de sus bienes (casa, dinero, carro, animales, artefactos, sueldo, negocio u otros bienes)? ¿o le restringe o impide el uso de los mismos?",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
              "NO APLICA PORQUE NO TIENE BIENES PROPIOS",
            ]
          },
        ]
      },
      {
        "subTitle": "Orientacion Sexual",
        "indicacion" : "",
        "preguntas": [
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja o expareja le ha agredido, insultado y/o excluye (discriminado) por su orientación sexual? La víctima puede reservarse el derecho de contestar",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
              "NO APLICA",
            ]
          },
        ]
      },
      {
        "subTitle": "Interculturalidad",
        "indicacion" : "",
        "preguntas": [
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja o expareja le humilla o excluye (discrimina) por su cosmovisión (forma de interpretar el mundo), lengua (lenguas indígenas, acento y forma de hablar una lengua), fenotipo (rasgos físicos y/o color de piel), indumentaria (vestimenta, adornos y accesorios) e identidad étnica (pertenencia aun grupo étnico)?",
            "type": "select",
            "required": true,
            "options": [
              "En el ámbito étnico? de su pareja",
              "En el ámbito étnico de ella",
              "En cualquier otro ámbito",
              "NO",
            ]
          },
        ]
      },
      {
        "subTitle": "Discapacidad",
        "indicacion" : "Si en la primera seccion [Datos Generales] indico que no presenta discapacidad, pasar seccion ",
        "preguntas": [
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja o expareja le humilla o excluye (discrimina) por estar en situación de discapacidad que le impide realizar con facilidad las actividades de la vida diaria?",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
              "NO APLICA",
            ]
          },
        ]
      },
      {
        "subTitle": "Embarazo",
        "indicacion" : "Si responde AFIRMATIVAMENTE, la clasificacion sube UN NIVEL",
        "preguntas": [
          {
            "label": "Seleccione Opcion",
            "text": "¿Esta embarazada? [si responde NO, NO PREGUNTAR las siguientes preguntas] ",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
            ]
          },
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja la ha amenazado con abandonarle o su expareja le ha abandonado porque esta embarazada?",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
              "NO APLICA (porque no esta embarazada)",
            ]
          },
          {
            "label": "Seleccione Opcion",
            "text": "¿Su pareja o expareja le golpea o le ha golpeado en el vientre?",
            "type": "select",
            "required": true,
            "options": [
              "SI",
              "NO",
              "NO APLICA (porque no esta embarazada)",
            ]
          },
        ]
      },
        
    ]
  }

  isEditable = true;

  constructor() { }

  ngOnInit(): void {

    this.controlForm1 = new FormGroup({
      nombreCompleto: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apePaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apeMaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      nroDocumento: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      nroHijos: new FormControl('', [Validators.pattern('^[0-9]+$')]),
      tipoDoc: new FormControl('', [Validators.required]),
      ocupa: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      discap: new FormControl({ value: '', disabled: this.disableDisca.value! }, [Validators.required]),
      tipoLengua: new FormControl('', [Validators.required]),
      especLengua: new FormControl('', [Validators.required]),
    })

    this.controlForm2 = new FormGroup({
      secondCtrl: new FormControl('', [Validators.required])
    })

    this.controlForm3 = new FormGroup({
      preg0: new FormControl(this.preguntasValoracion[0].checked),
      preg1: new FormControl(this.preguntasValoracion[1].checked),
      preg2: new FormControl(this.preguntasValoracion[2].checked),
      preg3: new FormControl(this.preguntasValoracion[3].checked),
      preg4: new FormControl(this.preguntasValoracion[4].checked),
      preg5: new FormControl(this.preguntasValoracion[5].checked),
      preg6: new FormControl(this.preguntasValoracion[6].checked),
      preg7: new FormControl(this.preguntasValoracion[7].checked),
      preg8: new FormControl(this.preguntasValoracion[8].checked),
      preg9: new FormControl(this.preguntasValoracion[9].checked),
      preg10: new FormControl(this.preguntasValoracion[10].checked),
      preg11: new FormControl(this.preguntasValoracion[11].checked),
      preg12: new FormControl(this.preguntasValoracion[12].checked),
      preg13: new FormControl(this.preguntasValoracion[13].checked),
      preg14: new FormControl(this.preguntasValoracion[14].checked),
      preg15: new FormControl(this.preguntasValoracion[15].checked),
      preg16: new FormControl(this.preguntasValoracion[16].checked),
      preg17: new FormControl(this.preguntasValoracion[17].checked),
      preg18: new FormControl(this.preguntasValoracion[18].checked),
      preg19: new FormControl(this.preguntasValoracion[19].checked),
      preg20: new FormControl(this.preguntasValoracion[20].checked),
      preg21: new FormControl(this.preguntasValoracion[21].checked),

    })

    this.controlForm4 = new FormGroup({
      preg0: new FormControl('',[Validators.required]),
      preg1: new FormControl('',[Validators.required]),
      preg2: new FormControl('',[Validators.required]),
      preg3: new FormControl('',[Validators.required]),
      preg4: new FormControl('',[Validators.required]),
      preg5: new FormControl('',[Validators.required]),
      preg6: new FormControl('',[Validators.required]),
      preg7: new FormControl('',[Validators.required]),
      preg8: new FormControl('',[Validators.required]),
      preg9: new FormControl('',[Validators.required]),
    })
  }

  onFormSubmit() {
    //alert(JSON.stringify(this.controlForm3.value, null, 2));
    this.toggleDivPuntaje = true
    this.calcularPuntaje()
  }

  calcularPuntaje() {
    let sumaPtj = 0
    for (let index = 0; index < this.preguntasValoracion.length; index++) {
      if (this.controlForm3.get("preg" + index).value == true) {
        sumaPtj += this.preguntasValoracion[index].ptj;
        this.puntajeScore = sumaPtj
        if (this.puntajeScore >= 0 && this.puntajeScore <= 7) {
          this.colorRiesgo = "green"
          this.textRiesgo = "LEVE"
        } else if (this.puntajeScore >= 8 && this.puntajeScore <= 13) {
          this.colorRiesgo = "#3859b4"
          this.textRiesgo = "MODERADO"
        } else if (this.puntajeScore >= 14 && this.puntajeScore <= 17) {
          this.colorRiesgo = "red"
          this.textRiesgo = "SEVERO I"
        } else if (this.puntajeScore >= 18 && this.puntajeScore <= 37) {
          this.colorRiesgo = "brown"
          this.textRiesgo = "SEVERO II"
        }
      }

    }

    sumaPtj = 0

  }


}

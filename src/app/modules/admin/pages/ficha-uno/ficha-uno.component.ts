import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EscalaRiesgoComponent } from '../../componentes/escala-riesgo/escala-riesgo.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { VerificacionFichaComponent } from '../../componentes/verificacion-ficha/verificacion-ficha.component';
import { DatosOperario } from 'src/app/shared/interfaces/datosOperario';
import { ArchivoServiceService } from 'src/app/services/archivo-service.service';

export interface tablaFechaEvento {
  fecha: string,
  descripcion: string,
  escala: number

}

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
  controlForm41: FormGroup | any
  controlForm5: FormGroup | any

  disableDisca = new FormControl(false)

  dataSource = new MatTableDataSource<any>()
  dataTable: any = []

  minDate: Date | any;
  maxDate: Date | any;

  currentYear = new Date().getFullYear();

  toggleDivPuntaje = false

  puntajeScore = 0

  colorRiesgo = ""
  textRiesgo = "--"

  columnasFechaEvento = ["fecha", "descripcion", "escala", "action"]

  datosPers = {
    tipoDocList: [
      { tipo: "DNI" },
      { tipo: "Carnet Extranjeria", },
      { tipo: "No Tiene ni recuerda el Numero", },
      { tipo: "Otro", },
    ],
    tipoDisList: [
      { tipo: "Fisica", },
      { tipo: "Visual", },
      { tipo: "Auditiva", },
      { tipo: "Psicosocial", },
      { tipo: "Intelectual", },
    ],
    listDisca: [
      { tipo: "SI", },
      { tipo: "NO", },
    ],
    listLengua: [
      { tipo: "Castellano", },
      { tipo: "Quechua", },
      { tipo: "Aymara", },
      { tipo: "Otro", },
    ],
  }

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

  anexoPreguntas12 = {
    "formTitle": "Factores de Vulnerabilidad",
    "formDescription": "Formulario de los factores",
    "formFields": [
      {
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

  anexoPreguntas = {
    "formTitle": "Factores de Vulnerabilidad",
    "formDescription": "Formulario de los factores",
    "formFields": [
      {
        "subTitle": "Violencia economica o patrimonial",
        "indicacion": "",
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
        "indicacion": "",
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
        "indicacion": "",
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
        "indicacion": "Si en la primera seccion [Datos Generales] indico que no presenta discapacidad, pasar seccion ",
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
        "indicacion": "Si responde AFIRMATIVAMENTE, la clasificacion sube UN NIVEL",
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

  anexoPreguntas2 = {
    "formTitle": "Formulario Anexos 1.2",
    "formDescription": "",
    "formFields": [
      {
        "label": "Descripcion",
        "text": "Si usted vive con el agresor, por favor reitéreme su dirección y dígame algunas características de la vivienda (casa, departamento, condominio, edificio familiar, color, piso, etc.) y referencias (cercanía a qué avenidas, comercios, u otros que permitan ubicar el lugar) para poder ubicarla.",
        "type": "textarea",
        "required": true,
      },
      {
        "label": "Descripcion",
        "text": "¿Usted conoce dónde vive el denunciado? Si es así, dígame la dirección y algunas características de esa vivienda (color, piso, reja, etc.) y referencias (cercanía a qué avenidas, comercios, u otros que permitan ubicar el lugar) que permitan ubicarlo.",
        "type": "textarea",
        "required": true,
      },
      {
        "label": "Descripcion",
        "text": "¿El denunciado la busca en su trabajo, centro de estudio u otro lugar que frecuente? Si es así, indique las direcciones de esos lugares incluyendo sus referencias (cercanía a qué avenidas, comercios, u otros que permitan ubicar el lugar).",
        "type": "textarea",
        "required": true,
      },
      {
        "label": "Descripcion",
        "text": "¿En qué otro lugar se puede encontrar al denunciado? Por favor, dígame las direcciones de esos lugares, como la casa de familiares, amigos, trabajo, ex parejas, etc.",
        "type": "textarea",
        "required": true,
      },
      {
        "label": "¿El denunciado practica algún deporte violento o de peligro (artes marciales u otro)?",
        "type": "slide",
        "checked": false
      },
      {
        "label": "¿El denunciado es policía, del Ejército, Fuerzas Armadas o es agente de seguridad, serenazgo o practica algún pasatiempo de riesgo?",
        "type": "slide",
        "checked": false
      },
      {
        "label": "¿El denunciado tiene familiares y/o amistades que han estado en la cárcel o han tenido problemas con la ley? ",
        "type": "slide",
        "checked": false
      },
      {
        "label": "Descripcion",
        "text": "Describa la contextura física del denunciado (alto, corpulento, fuerte, etc.).",
        "type": "textarea",
        "required": true,
      },
      {
        "label": "Descripcion",
        "text": "Describa las características físicas del agresor que sirvan para identificarlo, como imágenes actuales del rostro y cuerpo del presunto agresor. ¿Nos puede enseñar o entregar ahora mismo una foto actual de él?",
        "type": "textarea",
        "required": true,
      },
      {
        "label": "Descripcion",
        "text": "¿Sabe si el denunciado tiene algún problema de salud mental, adicciones o si sigue algún tratamiento médico para tales fines?",
        "type": "textarea",
        "required": true,
      },

    ],

  }

  isEditable = true;

  constructor(
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private datosOpe: DatosOperario,
    private archivoService : ArchivoServiceService
  ) { }

  ngOnInit(): void {

    this.minDate = new Date(this.currentYear - 1, 0, 0);
    this.maxDate = new Date(this.currentYear, 0, 0);

    this.controlForm1 = new FormGroup({
      tipoDoc: new FormControl('', [Validators.required]),
      nroDocumento: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.pattern('^[0-9]+$')]),
      nombreCompleto: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apePaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apeMaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      ocupa: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      nroHijos: new FormControl('', [Validators.pattern('^[0-9]+$')]),
      preDiscap: new FormControl('', [Validators.required]),
      discap: new FormControl({ value: '', disabled: true }, [Validators.required]),
      tipoLengua: new FormControl('', [Validators.required]),
      especLengua: new FormControl({ value: '', disabled: true }, [Validators.required]),
      especEtnia: new FormControl('', [Validators.required]),
    })

    this.controlForm1.controls['tipoDoc'].valueChanges.subscribe((value: any) => {
      if (value === "No Tiene ni recuerda el Numero") {
        this.controlForm1.get('nroDocumento').setValue("")
        this.controlForm1.controls['nroDocumento'].disable()
      } else {
        this.controlForm1.controls['nroDocumento'].enable()
      }
    })

    this.controlForm1.controls['tipoLengua'].valueChanges.subscribe((value: any) => {
      if (value === "Otro") {
        this.controlForm1.controls['especLengua'].enable()
      } else {
        this.controlForm1.get('especLengua').setValue("")
        this.controlForm1.controls['especLengua'].disable()
      }
    })

    this.controlForm1.controls['preDiscap'].valueChanges.subscribe((value: any) => {
      if (value === "SI") {
        this.controlForm1.controls['discap'].enable()
      } else {
        this.controlForm1.get('discap').setValue("")
        this.controlForm1.controls['discap'].disable()
      }
    })

    this.controlForm2 = new FormGroup({
      fechaEvento: new FormControl('', [Validators.required])
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
      seccion1preg0: new FormControl('', [Validators.required]),
      seccion1preg1: new FormControl('', [Validators.required]),
      seccion1preg2: new FormControl('', [Validators.required]),
      seccion1preg3: new FormControl('', [Validators.required]),
      seccion2preg0: new FormControl('', [Validators.required]),
      seccion3preg0: new FormControl('', [Validators.required]),
      seccion4preg0: new FormControl('', [Validators.required]),
      seccion5preg0: new FormControl('', [Validators.required]),
      seccion5preg1: new FormControl('', [Validators.required]),
      seccion5preg2: new FormControl('', [Validators.required]),
    })

    this.controlForm41 = new FormGroup({     
        seccion1preg0: new FormControl('', [Validators.required]),
        seccion1preg1: new FormControl('', [Validators.required]),
        seccion1preg2: new FormControl('', [Validators.required]),
        seccion1preg3: new FormControl('', [Validators.required]),
        seccion2preg0: new FormControl(this.anexoPreguntas2.formFields[4].checked),
        seccion2preg1: new FormControl(this.anexoPreguntas2.formFields[4].checked),
        seccion2preg2: new FormControl(this.anexoPreguntas2.formFields[4].checked),
        seccion3preg0: new FormControl('', [Validators.required]),
        seccion3preg1: new FormControl('', [Validators.required]),
        seccion3preg2: new FormControl('', [Validators.required]),

    })

    this.controlForm5 = new FormGroup({
      obser: new FormControl('')
    })
  }

  test() {
    console.log(this.controlForm4.value);
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

  addFecha() {
    if (this.controlForm2.invalid) {
      return;
    }
    const newDate = {
      "fecha": this.controlForm2.get("fechaEvento").value,
      "descripcion": "Descripcion ",
      "escala": 0
    }
    this.dataTable.push(newDate)
    this.updateDataSource()
  }

  borrarEvento(i: number) {
    this.dataTable.splice(i, 1);
    this.updateDataSource();
  }

  editarEvento(element: any, index: number) {
    const matDialogConfig = new MatDialogConfig();

    matDialogConfig.disableClose = true;
    matDialogConfig.data = element
    this.matDialog.open(EscalaRiesgoComponent, matDialogConfig)
      .afterClosed().subscribe(resp => {
        if (resp != undefined) {
          this.dataTable.splice(index, 1, resp)
          this.updateDataSource()
        } else {
          this.updateDataSource()
        }
      })


  }

  updateDataSource() {
    this.dataSource.data = this.dataTable;
  }

  generarJsonFile() {
    const snackBar = new MatSnackBarConfig();
    snackBar.duration = 3 * 1000;
    // if (this.controlForm1.invalid) {
    //   const snackBarConfig = new MatSnackBarConfig();
    //   snackBarConfig.duration = 3 * 1000;
    //   snackBarConfig.panelClass = ['snackBar-validator'];
    //   this.snackBar.open('Ha dejado un campo Vacio, Verifique por favor... ', 'cerrar', snackBarConfig)
    //   return
    // }
    // const dniVic = this.controlForm1.get('nroDocumento').value
    const matDialogConfig = new MatDialogConfig();

    matDialogConfig.disableClose = true;

    this.matDialog.open(VerificacionFichaComponent, matDialogConfig)
      .afterClosed().subscribe(resp => {
        if (resp == 1) {
          return
        } else {
          const data = {
            dniVic : this.controlForm1.get('nroDocumento').value,
            nroFicha: "27050",
            apellVic : this.controlForm1.get('apePaterno').value +' ' + this.controlForm1.get('apeMaterno').value,
            nivEsca : this.puntajeScore,
            data : {
              datosOpe: [
                this.datosOpe.datos[0]
              ],
              datosVic: [
                this.controlForm1.value
              ],
              control2: [
                {
                  datosTabla: this.dataTable
                }
              ],
              escalaRiesgo: [
                {
                  preguntas: [this.controlForm3.value],
                  puntaje: this.puntajeScore
                },
              ],
              Anexo11: [
                this.controlForm4.value
              ],
              Anexo12: [
                this.controlForm41.value
              ],
              observacionFinal: this.controlForm5.get('obser').value
            },
            
          }

          this.archivoService.postFicha( data )
            .subscribe( resp => {
              this.snackBar.open(resp.ok, 'Cerrar', snackBar)
            })

          const dataJson = JSON.stringify(data);

          // Create a blob object from the JSON data.
          const blob = new Blob([dataJson], { type: 'application/json' });

          // Download the blob object as a file.
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          const dateNow = new Date().getTime()
          link.href = url;
          link.download = `data-${dateNow}.json`;
          link.click();
        }

      })

  }

}

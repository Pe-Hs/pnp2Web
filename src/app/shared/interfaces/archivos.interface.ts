export interface Archivos {
    _id?:       string;
    dniVic?:    string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?:       number;
    data?:      Datum[] | DataClass;
    nroFicha?:  string;
    apellVic?:  string;
    nivEsca?:   number;
}

export interface Datum {
    datosOpe?: DatosOpe[];
    control1?: Control1[];
    control2?: Control2[];
    control3?: EscalaRiesgo[];
    control4?: Control4[];
    control5?: string;
}

export interface Control1 {
    tipoDoc?:        string;
    nombreCompleto?: string;
    apePaterno?:     string;
    apeMaterno?:     string;
    edad?:           string;
    ocupa?:          string;
    nroHijos?:       string;
    preDiscap?:      string;
    tipoLengua?:     string;
    especEtnia?:     string;
}

export interface Control2 {
    datosTabla?: DatosTabla[];
}

export interface DatosTabla {
    fecha?:       Date;
    descripcion?: string;
    escala?:      number;
}

export interface EscalaRiesgo {
    preguntas?: { [key: string]: boolean }[];
    puntaje?:   number;
}

export interface Control4 {
    preg0?: string;
    preg1?: string;
    preg2?: string;
    preg3?: string;
    preg4?: string;
    preg5?: string;
    preg6?: string;
    preg7?: string;
    preg8?: string;
    preg9?: string;
}

export interface DatosOpe {
    nombres?:      string;
    apellidos?:    string;
    rango?:        string;
    dni?:          string;
    distrito?:     string;
    provincia?:    string;
    departamento?: string;
    institucion?:  string;
    urlImage?:     string;
}

export interface DataClass {
    datosOpe?:         DatosOpe[];
    datosVic?:         DatosVic[];
    control2?:         Control2[];
    escalaRiesgo?:     EscalaRiesgo[];
    Anexo11?:          Anexo11[];
    Anexo12?:          Anexo12[];
    observacionFinal?: string;
}

export interface Anexo11 {
    seccion1preg0?: string;
    seccion1preg1?: string;
    seccion1preg2?: string;
    seccion1preg3?: string;
    seccion2preg0?: string;
    seccion3preg0?: string;
    seccion4preg0?: string;
    seccion5preg0?: string;
    seccion5preg1?: string;
    seccion5preg2?: string;
}

export interface Anexo12 {
    seccion1preg0?: string;
    seccion1preg1?: string;
    seccion1preg2?: string;
    seccion1preg3?: string;
    seccion2preg0?: boolean;
    seccion2preg1?: boolean;
    seccion2preg2?: boolean;
    seccion3preg0?: string;
    seccion3preg1?: string;
    seccion3preg2?: string;
}

export interface DatosVic {
    tipoDoc?:        string;
    nroDocumento?:   string;
    nombreCompleto?: string;
    apePaterno?:     string;
    apeMaterno?:     string;
    edad?:           number;
    ocupa?:          string;
    nroHijos?:       string;
    preDiscap?:      string;
    discap?:         string;
    tipoLengua?:     string;
    especEtnia?:     string;
}

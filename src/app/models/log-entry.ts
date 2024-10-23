export interface LogEntry {

    id: string;
    turno: string;
    fecha: string; // Usaremos ISO 8601 para fecha y hora
    horaIncidente: string;
    tipoIncidente: string;
    descripcion: string;
    informacionAdicional?: string; // Opcional

}

import { Component, OnInit } from '@angular/core';
import { LogEntry } from 'src/app/models/log-entry';

@Component({
  selector: 'app-bitacora-form',
  templateUrl: './bitacora-form.component.html',
  styleUrl: './bitacora-form.component.scss'
})
export class BitacoraFormComponent implements OnInit {

  logEntries: LogEntry[] = [
    { id: 1, date: '2024-10-01', time: '08:00', guardName: 'Juan Ocampo', activity: 'Ronda inicial, todo en orden' },
    { id: 2, date: '2024-10-01', time: '12:00', guardName: 'Juan Ocampo', activity: 'Revisión de cámaras de seguridad' },
    { id: 3, date: '2024-10-01', time: '16:00', guardName: 'Luis González', activity: 'Ronda de relevo, todo en orden' },
    { id: 4, date: '2024-10-02', time: '00:00', guardName: 'Luis González', activity: 'Reporte de actividad sospechosa' }
  ];

  editingEntry: LogEntry | null = null;

  constructor() { }

  ngOnInit(): void {}

  editEntry(entry: LogEntry): void {
    // Crear una copia para editar sin modificar la original
    this.editingEntry = { ...entry };
  }

  saveEntry(): void {
    if (this.editingEntry) {
      // Buscar el índice de la entrada que estamos editando
      const index = this.logEntries.findIndex(e => e.id === this.editingEntry?.id);
      if (index !== -1) {
        // Actualizar la entrada en la lista de entradas
        this.logEntries[index] = this.editingEntry;
        this.editingEntry = null; // Limpiar el formulario
      }
    }
  }

  cancelEdit(): void {
    this.editingEntry = null; // Cancelar la edición y limpiar el formulario
  }

  deleteEntry(entry: LogEntry): void {
    // Filtrar la entrada seleccionada fuera del array
    this.logEntries = this.logEntries.filter(e => e.id !== entry.id);
  }

}

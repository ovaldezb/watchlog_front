import { Component, OnInit } from '@angular/core';
import { LogEntry } from 'src/app/models/log-entry';
import { BitacoraService } from 'src/app/services/bitacora.service';

@Component({
  selector: 'app-bitacora-form',
  templateUrl: './bitacora-form.component.html',
  styleUrl: './bitacora-form.component.scss'
})
export class BitacoraFormComponent implements OnInit {

  logEntries: LogEntry[] = [];
  editingEntry: boolean = false;
  currentEntry: LogEntry = this.initializeEntry();
  loading: boolean = true;

  constructor(private readonly logEntryService: BitacoraService) { }

  ngOnInit(): void {

    this.loadLogEntries();

  }
  loadLogEntries(): void {
    this.logEntryService.getLogEntries().subscribe((entries) => {
      this.logEntries = entries;
    });
  }

  initializeEntry(): LogEntry {
    return {
      id: '',
      fecha: '',
      horaIncidente: '',
      turno: '',
      tipoIncidente: '',
      descripcion: '',
      informacionAdicional: ''
    };
  }

  addLogEntry(): void {
    this.logEntryService.addLogEntry(this.currentEntry).subscribe((entry) => {
      this.logEntries.push(entry);
      this.currentEntry = this.initializeEntry(); // Limpiar el formulario
    });
  }

  editEntry(entry: LogEntry): void {
    console.log('ID a editar:', entry.id); // Verifica el ID
    this.currentEntry = { ...entry };
    this.editingEntry = true;
  }

  saveEntry(): void {
    if (this.currentEntry.id) {
      this.logEntryService
        .updateLogEntry(this.currentEntry.id, this.currentEntry)
        .subscribe({
          next: () => {
            console.log('Entrada actualizada correctamente');
            this.loadLogEntries();
            this.cancelEdit();
          },
          error: (error) => console.error('Error al actualizar la entrada:', error)
        });
    }
  }

  deleteEntry(entry: LogEntry): void {
    this.logEntryService.deleteLogEntry(entry.id).subscribe({
      next: () => this.loadLogEntries(),
      error: (error) => console.error('Error al eliminar la entrada:', error)
    });
  }


  cancelEdit(): void {
    this.editingEntry = false;
    this.currentEntry = this.initializeEntry(); // Reiniciar el formulario
  }
}

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
      id: 0,
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
    this.currentEntry = { ...entry }; // Copiar los datos para editar
    this.editingEntry = true;
  }

  saveEntry(): void {
    if (this.currentEntry.id) {
      this.logEntryService
        .updateLogEntry(this.currentEntry.id.toString(), this.currentEntry)
        .subscribe(() => {
          this.loadLogEntries(); // Recargar la lista de entradas
          this.cancelEdit();
        });
    }
  }

  deleteEntry(id: number): void {
    this.logEntryService.deleteLogEntry(id.toString()).subscribe(() => {
      this.loadLogEntries(); // Recargar la lista después de eliminar
    });
  }

  cancelEdit(): void {
    this.editingEntry = false;
    this.currentEntry = this.initializeEntry(); // Resetear el formulario
  }
}

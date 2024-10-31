import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { LogEntry } from '../models/log-entry'; // Asegúrate que el modelo esté correctamente importado

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  private readonly apiUrl = 'http://40.124.182.233:8090/api/'; // Cambia por tu URL de backend

  constructor(private readonly http: HttpClient) { }


  getBitacoras(): Observable<LogEntry[]> {

    return this.http.get<LogEntry[]>(this.apiUrl + 'bitacora');

  }

  getLogEntries(): Observable<LogEntry[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<LogEntry[]>(`${this.apiUrl}bitacora`, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching log entries:', error);
        return throwError(() => new Error('Error fetching log entries, inténtelo más tarde.'));
      })
    );
  }
  
  addLogEntry(entry: LogEntry): Observable<LogEntry> {

    return this.http.post<LogEntry>(this.apiUrl, entry);

  }

  // Actualizar entrada existente
  updateLogEntry(id: string, entry: LogEntry): Observable<LogEntry> {

    return this.http.put<LogEntry>(`${this.apiUrl + 'bitacora/'}${id}`, entry);
  
  }

  // Eliminar entrada por ID
  deleteLogEntry(id: string): Observable<void> {
  
    return this.http.delete<void>(`${this.apiUrl + 'bitacora/'}${id}`);
  
  }

}


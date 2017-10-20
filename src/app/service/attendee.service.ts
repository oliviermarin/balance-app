import { Injectable } from '@angular/core';
import { Attendee } from './../domain/Attendee';
import { environement } from './../environement/environement';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AttendeeService {

  baseUrl: string = `${environement.apiUrl}/attendee`;

  constructor(private http : Http) { }

  getById(attendeeId: number): Observable<Attendee> {
    return this.http
      .get(`${this.baseUrl}/${attendeeId}`)
      .map(data => data.json() as Attendee);
  }

  getAll(): Observable<Attendee[]> {
    return this.http
      .get(`${this.baseUrl}/all`)
      .map(data => data.json() as Attendee[]);
  }
}

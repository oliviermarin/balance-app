import { Component, OnInit } from '@angular/core';
import { AttendeeService } from './../service/attendee.service';
import { Attendee } from './../domain/Attendee';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit {
  
  attendeeDataSource: AttendeeDataSource;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendeeService
      .getAll()
      .subscribe(attendees => {
        this.attendeeDataSource = new AttendeeDataSource(attendees);
      });   
  }

}

export class AttendeeDataSource extends DataSource<any> {

  constructor(private attendees: Attendee[]) {
    super();
  }

  connect(): Observable<Attendee[]> {
    return Observable.of(this.attendees);
  }

  disconnect() {}
}

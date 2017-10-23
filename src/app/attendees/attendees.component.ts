import { Component, OnInit, ViewChild } from '@angular/core';
import { AttendeeService } from './../service/attendee.service';
import { Attendee } from './../domain/Attendee';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/collections';
import { MdSort } from '@angular/material';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit { 
  attendeeDataSource: AttendeeDataSource;
  attendeeDataBase: AttendeeDataBase;
  @ViewChild(MdSort) sort: MdSort;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendeeService
      .getAll()
      .subscribe(attendees => {
        this.attendeeDataBase = new AttendeeDataBase(attendees);
        this.attendeeDataSource = new AttendeeDataSource(this.attendeeDataBase, this.sort);
      });   
  }

}

export class AttendeeDataSource extends DataSource<any> {

  constructor(private attendeeDataBase: AttendeeDataBase, private sort: MdSort) {
    super();
  }

  connect(): Observable<Attendee[]> {
    const displayDataChanges = [
      this.attendeeDataBase.attendeeDataChange,
      this.sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}

  getSortedData(): Attendee[] {
    const data = this.attendeeDataBase.attendeeData.slice();
    
    if (!this.sort.active || this.sort.direction == '') { 
      return data; 
    }

    return data.sort((a, b) => {
      let prop1: number | string = '';
      let prop2: number | string = '';
      
      switch (this.sort.active) {
        case 'id': [prop1, prop2] = [a.id, b.id]; break;
        case 'firstname': [prop1, prop2] = [a.firstname, b.firstname]; break;
        case 'lastname': [prop1, prop2] = [a.lastname, b.lastname]; break;
        case 'email': [prop1, prop2] = [a.email, b.email]; break;
      }

      let val1 = isNaN(+prop1) ? prop1 : +prop1;
      let val2 = isNaN(+prop1) ? prop2 : +prop2;

      return (val1 < val2 ? -1 : 1) * (this.sort.direction == 'asc' ? 1 : -1);
    });
  }
}

export class AttendeeDataBase {
  attendeeDataChange: BehaviorSubject<Attendee[]> = new BehaviorSubject<Attendee[]>([]);

  constructor(private attendees: Attendee[]){
    this.attendeeDataChange.next(this.attendees);
  }

  get attendeeData(): Attendee[] {
    return this.attendeeDataChange.value;
  }
} 
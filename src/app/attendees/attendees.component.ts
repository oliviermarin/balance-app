import { Component, OnInit } from '@angular/core';
import { AttendeeService } from './../service/attendee.service';
import { Attendee } from './../domain/Attendee';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit {

  attendees: Attendee[];

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendeeService
      .getAll()
      .subscribe(attendes => {
        for(let attendee of attendes){
          console.log(attendee);
        };
        this.attendees = attendes;
      });
  }

}

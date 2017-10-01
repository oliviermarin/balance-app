import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  @Output()
  toggleNavBarTriggered: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar() {
    this.toggleNavBarTriggered.emit();
  }
  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
  @ViewChild('sidenav')
  public menuSideBar: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleMenuSideBar() {
    this.menuSideBar.toggle();
  }
  
}

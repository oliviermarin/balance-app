import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './core/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home';

  @ViewChild('appSideNav')
  appSideNav: SideNavComponent;

  toggleNavBarTriggered() {
    console.log("send event to the nav side bar");
    this.appSideNav.toggleMenuSideBar();
  }
}

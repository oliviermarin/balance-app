import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AttendeeService } from './service/attendee.service';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FtrComponent } from './core/ftr/ftr.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { AttendeeComponent } from './attendee/attendee.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { CdkTableModule } from '@angular/cdk/table';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FtrComponent,
    SideNavComponent,
    AttendeeComponent,
    AttendeesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    CdkTableModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AttendeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

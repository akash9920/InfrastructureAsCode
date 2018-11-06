import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

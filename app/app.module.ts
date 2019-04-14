import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiplyPipe } from './mult.pipe';

import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';


import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MultiplyPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AdminDashboardModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}

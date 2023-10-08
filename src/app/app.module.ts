import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminComponent } from './layout/admin/admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

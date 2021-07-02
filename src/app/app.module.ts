import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddComponent} from "./components/add/add.component";
import {ListComponent} from "./components/list/list.component";
import {EditComponent} from "./components/edit/edit.component";
import {ItemsService} from "./components/add/service/items.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

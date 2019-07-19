import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from "./material.module"
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoaderComponent } from "./components/loader/loader.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SearchComponent } from "./components/search/search.component";
import { SearchBoxComponent } from "./components/search/search-box.component";
import { FileSizePipe } from "./pipes/file-size.pipe";

import { SearchService } from "./services/search.service";


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavigationComponent,
    SearchComponent,
    SearchBoxComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

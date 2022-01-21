import { SheetService } from './services/sheet.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { CreationComponent } from './components/creation/creation.component';
import { SheetComponent } from './components/sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    CreationComponent,
    SheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { SheetService } from './services/sheet.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { CreationComponent } from './components/creation/creation.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { HeaderComponent } from './components/header/header.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { BattleStatsComponent } from './components/battle-stats/battle-stats.component';
import { CharacterStatsComponent } from './components/character-stats/character-stats.component';
import { CharacterSavesComponent } from './components/character-saves/character-saves.component';
import { CharacterAbilitiesComponent } from './components/character-abilities/character-abilities.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreationComponent,
    SheetComponent,
    HeaderComponent,
    CharacterInfoComponent,
    BattleStatsComponent,
    CharacterStatsComponent,
    CharacterSavesComponent,
    CharacterAbilitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

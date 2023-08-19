import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { HeaderComponent } from './components/header/header.component';
import { TabProfilComponent } from './components/tab-profil/tab-profil.component';
import { TabEnfantComponent } from './components/tab-enfant/tab-enfant.component';
import { CardComponent } from './shared/components/card/card.component';
import {FormsModule} from "@angular/forms";
import {CapitalizePipe} from "./shared/pipes/capitalize.pipe";
import {Ng2TelInputModule} from "ng2-tel-input";

@NgModule({
    declarations: [
        AppComponent,
        ProfilComponent,
        HeaderComponent,
        TabProfilComponent,
        TabEnfantComponent,
        CardComponent,
        CapitalizePipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

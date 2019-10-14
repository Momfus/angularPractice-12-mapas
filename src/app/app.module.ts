import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

  entryComponents:  [ // Los componentes que se crean de forma dinámica (como al generarlos con mat-dialog)

    MapaEditarComponent

  ],

  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBznzq5_UJ6_Ic9XorMqCtGv1Ib1rtZOIk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

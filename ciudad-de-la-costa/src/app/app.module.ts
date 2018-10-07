import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Contenido1Component } from './componentes/contenido1/contenido1.component';
import { ContenidoAComponent } from './componentes/contenido-a/contenido-a.component';
import { ContenidoBComponent } from './componentes/contenido-b/contenido-b.component';
import { TemplateAComponent } from './componentes/template-a/template-a.component';
import { TemplateBComponent } from './componentes/template-b/template-b.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Contenido1Component,
    ContenidoAComponent,
    ContenidoBComponent,
    TemplateAComponent,
    TemplateBComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

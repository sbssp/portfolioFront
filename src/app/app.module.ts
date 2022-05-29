import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AgregarExp } from './componentes/experiencia/agergar-exp/agregar-exp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { AgregarEstComponent } from './componentes/estudios/agregar-est/agregar-est.component';
import { EditarEstComponent } from './componentes/estudios/editar-est/editar-est.component';
import { EditarAcercadeComponent } from './componentes/acercade/editar-acercade/editar-acercade.component';
import { AgregarProyComponent } from './componentes/proyectos/agregar-proy/agregar-proy.component';
import { EditarProyComponent } from './componentes/proyectos/editar-proy/editar-proy.component';
import { AgregarSkillsComponent } from './componentes/skills/agregar-skills/agregar-skills.component';
import { EditarSkillsComponent } from './componentes/skills/editar-skills/editar-skills.component';
import { IndexComponent } from './contenedores/index/index.component';
import { AdminPanelComponent } from './contenedores/admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BoardAdminComponent } from './auth/board-admin/board-admin.component';
import { BoardModeratorComponent } from './auth/board-moderator/board-moderator.component';
import { BoardUserComponent } from './auth/board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    AgregarExp,
    EditarExpComponent,
    AgregarEstComponent,
    EditarEstComponent,
    EditarAcercadeComponent,
    AgregarProyComponent,
    EditarProyComponent,
    AgregarSkillsComponent,
    EditarSkillsComponent,
    IndexComponent,
    AdminPanelComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  
  providers: [authInterceptorProviders, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
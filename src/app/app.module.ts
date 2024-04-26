import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { FormationsComponent } from './component/formations/formations.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo: '/header', pathMatch:'full'},
  {path:'header', component : AppComponent},
  {path:'presentation', component: HeaderComponent},
  {path:'experiences', component: ExperiencesComponent},
  {path:'formation', component: FormationsComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExperiencesComponent,
    FormationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

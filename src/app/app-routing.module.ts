import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { FormationsComponent } from './component/formations/formations.component';
import { ContactComponent } from './component/contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', redirectTo: '/header', pathMatch:'full'},
  {path:'header', component : AppComponent},
  {path:'presentation', component: HeaderComponent},
  {path:'experiences', component: ExperiencesComponent},
  {path:'formation', component: FormationsComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

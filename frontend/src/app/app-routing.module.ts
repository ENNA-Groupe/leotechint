import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'accueil',
    pathMatch:'full'
  },
  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path:'services/:menu',
    component: ServicesComponent
  },
  {
    path: 'propos',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

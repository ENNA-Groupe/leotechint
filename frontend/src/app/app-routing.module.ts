import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { LeotechComponent } from './views/home/leotech/leotech.component';
import { LeotechHomeComponent } from './views/home/leotech-home/leotech-home.component';
import { LeotechCorporateComponent } from './views/home/leotech-corporate/leotech-corporate.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'accueil',
    pathMatch:'full'
  },
  {
    path: 'accueil',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo:'leotech',
        pathMatch:'full'
      },
      {
        path: 'leotech',
        component: LeotechComponent
      },
      {
        path: 'leotech-home',
        component: LeotechHomeComponent
      },
      {
        path:'leotech-corporate',
        component: LeotechCorporateComponent
      }
    ]
  },
  {
    path:'services',
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

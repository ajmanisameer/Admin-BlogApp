import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdHomeComponent } from './admin/ad-home/ad-home.component';
import { FormComponent } from './admin/form/form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdHomeComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

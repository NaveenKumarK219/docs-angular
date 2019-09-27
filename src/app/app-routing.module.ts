import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import {LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: 'docs/home', pathMatch: 'full'},
    // {path: 'docs', component: AppComponent},
    {path: 'docs/:docName', component: DocsComponent},
	{path: 'login', component: LoginComponent},
	{path: 'admin/dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

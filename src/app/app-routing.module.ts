import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'docs', pathMatch: 'full'},
    {path: 'docs', component: AppComponent},
    {path: 'docs/:docName', component: DocsComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

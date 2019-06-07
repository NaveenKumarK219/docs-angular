import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path:'docs/:docName', component: DocsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

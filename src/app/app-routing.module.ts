import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchipeComponent } from './echipe/echipe.component';
import { JucatoriComponent } from './jucatori/jucatori.component';

const routes: Routes = [
  {path: 'echipe', component: EchipeComponent},
  {path: 'jucatori', component: JucatoriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

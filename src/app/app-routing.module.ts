import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchipeComponent } from './echipe/echipe.component';

const routes: Routes = [
  {path: 'echipe', component: EchipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

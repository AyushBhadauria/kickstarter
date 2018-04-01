import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DataService } from '../../service/data.service';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent],
  exports:[HomeComponent],
  providers:[DataService]
})
export class HomeModule { }

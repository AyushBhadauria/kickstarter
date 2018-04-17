import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DataService } from '../../service/data.service';
import { Routes, RouterModule } from '@angular/router';

import { PagerService } from '../../service/pagerService';

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
  providers:[DataService,PagerService]
})
export class HomeModule { }

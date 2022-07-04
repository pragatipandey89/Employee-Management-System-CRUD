import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',
    component:AllEmployeeComponent
  },
  {
    path:'add',
    component:AddEmployeeComponent
  },
  {
    path:'list',
    component:AllEmployeeComponent
  },
  {
    path:'update/:id',
    component:UpdateComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

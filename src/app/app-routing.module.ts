import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextcomponentComponent } from './register/textcomponent.component';
import { AngBootStrapComponent } from './home/ang-boot-strap.component';
import { EmployeeInfoComponent } from './login/employee-info.component';

const routes: Routes = [
  {path: "", component: AngBootStrapComponent},
  {path: "register", component: TextcomponentComponent},
  {path: "login", component: EmployeeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

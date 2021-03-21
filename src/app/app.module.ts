import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './register/textcomponent.component';
import { ImgcomponentComponent } from './navbar/imgcomponent.component';
import { FormcompComponent } from './footer/formcomp.component';
import { EmployeeInfoComponent } from './login/employee-info.component';
import { AngBootStrapComponent } from './home/ang-boot-strap.component';


@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImgcomponentComponent,
    FormcompComponent,
    EmployeeInfoComponent,
    AngBootStrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

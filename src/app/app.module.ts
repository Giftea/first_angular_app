import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImgcomponentComponent } from './imgcomponent/imgcomponent.component';
import { FormcompComponent } from './formcomp/formcomp.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { AngBootStrapComponent } from './ang-boot-strap/ang-boot-strap.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImgcomponentComponent,
    FormcompComponent,
    EmployeeInfoComponent,
    AngBootStrapComponent,
    NavBarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent
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

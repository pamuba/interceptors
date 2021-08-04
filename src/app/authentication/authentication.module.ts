import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HelpComponent } from '../help/help.component';
import { ChildRoutingModule } from './authentication.routing'


@NgModule({
  declarations: [LoginComponent, RegisterComponent, HelpComponent],
  imports: [
    CommonModule, ChildRoutingModule
  ],
  // exports:[LoginComponent, RegisterComponent, HelpComponent]
})
export class AuthenticationModule { }

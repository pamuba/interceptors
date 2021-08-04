// import { AuthenticationComponent } from '../authentication.component'
import { HelpComponent } from '../help/help.component';
import { RegisterComponent } from '../register/register.component'
import { LoginComponent } from '../login/login.component'
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

export const routes: Routes = [
  { path: '', component: LoginComponent }, // default route of the module
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'help', component: HelpComponent },
]
 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ChildRoutingModule { }
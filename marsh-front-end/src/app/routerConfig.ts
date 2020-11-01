import {Route} from '@angular/router'
import {ListEmployeeComponent} from './list-employee/list-employee.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {HomeComponent} from './home/home.component'
import {AddUpdateEmployeeComponent} from './add-update-employee/add-update-employee.component'
import {AdminComponent} from './admin/admin.component'
import {AdminGuard} from './guard/admin.guard'

const routes: Route[] = [
  {component: HomeComponent, path: '', pathMatch: 'full'},
  {component: AddUpdateEmployeeComponent, path: 'add'},
  {component: AddUpdateEmployeeComponent, path: 'add/:id'},
  {component: ListEmployeeComponent, path: 'list'},
  {component: RegisterComponent, path: 'register'},
  {component: AdminComponent, path: 'admin'}, // , canActivate: [AdminGuard]
  {component: LoginComponent, path: 'login'},
]
export default routes

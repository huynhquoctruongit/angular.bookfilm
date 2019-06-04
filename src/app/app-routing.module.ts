import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './home/home-layout/index/index.component';
import { ChitietVeComponent } from './home/home-layout/chitiet-ve/chitiet-ve.component';
import { DatgheComponent } from './home/home-layout/datghe/datghe.component';
import { LoginGuard } from 'src/app/guard/login.guard';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { LoginAdminComponent } from './admin/admin-layout/login-admin/login-admin.component';
import { IndexAdminComponent } from './admin/admin-layout/index-admin/index-admin.component';
import { AdminGuard } from './guard/admin.guard';
import { SendmailComponent } from './home/home-layout/datghe/sendmail/sendmail.component';
const routes: Routes = [
  {
    path: '', component : IndexComponent
  },
  {
    path: 'chitiet-film', component : ChitietVeComponent
  },
  {
    path: 'dat-ghe', component : DatgheComponent,canActivate:[LoginGuard]
  },
  {
    path: 'admin', component : LoginAdminComponent
  },
  {
    path: 'index-admin', component : IndexAdminComponent,canActivate:[AdminGuard]
  },
  {
    path: 'check-email', component : SendmailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

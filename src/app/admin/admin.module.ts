import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginAdminComponent } from './admin-layout/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { IndexAdminComponent } from './admin-layout/index-admin/index-admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLayoutComponent, LoginAdminComponent, IndexAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [AdminLayoutComponent,LoginAdminComponent]
})
export class AdminModule { }

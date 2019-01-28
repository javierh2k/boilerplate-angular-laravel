import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing-module';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    //HttpModule,
  ],
  providers: [
    //MemberService
  ],
  declarations: [
    HomeComponent,
    UserComponent,
  ],
  exports: [
    HomeComponent,
    UserComponent,
  ]
})
export class AdminModule { }

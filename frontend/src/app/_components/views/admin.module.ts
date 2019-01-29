import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing-module';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
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

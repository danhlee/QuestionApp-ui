import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionAppService } from './services/question-app.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [QuestionAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkComponent } from './work/work.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { WorkService } from './services/work-service';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'workList', component: WorkListComponent },
  { path: 'work/:id', component: WorkComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [AppComponent, WorkListComponent, WorkComponent, NavComponent, HomeComponent, ContactComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(ROUTES)],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule {}

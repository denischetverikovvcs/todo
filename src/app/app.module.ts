import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { PrioritiesComponent } from './views/priorities/priorities/priorities.component';
import { TasksComponent } from './views/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PrioritiesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

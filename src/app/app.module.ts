import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { NgMaterialModule } from './ng-material.module';

// external libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';

// components
import { AppComponent } from './app.component';
import { GraphicComponent } from './Components/graphic/graphic.component';
import { BottomLinksComponent } from './Components/bottom-links/bottom-links.component';
import { ExpenseRowComponent } from './Components/transactions/expense-row/expense-row.component';
import { HomePageComponent } from './Components/pages/home/home-page/home-page.component';
import { EditItemModalComponent } from './Components/transactions/edit-item-modal/edit-item-modal.component';
import { InputComponent } from './Components/pages/home/input/input.component';
import { CategoriesComponent } from './Components/transactions/categories/categories.component';
import { HistoryListComponent } from './Components/transactions/history-list/history-list.component';
import { DashboardComponent } from './Components/pages/dashboard/dashboard.component';
import { AuthComponent } from './Components/pages/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    BottomLinksComponent,
    HistoryListComponent,
    ExpenseRowComponent,
    HomePageComponent,
    EditItemModalComponent,
    InputComponent,
    CategoriesComponent,
    DashboardComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    FontAwesomeModule,
    NgChartsModule,
    BrowserAnimationsModule,
    NgbModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
  
export class AppModule { }
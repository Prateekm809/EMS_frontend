import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HTTP_INTERCEPTORS
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
<<<<<<< HEAD
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader.service';
import { HttpLoaderInterceptor } from './http-loader.interceptor'; // Import HttpLoaderInterceptor
=======
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
<<<<<<< HEAD
    EditEmployeeComponent,
    LoaderComponent
=======
    EditEmployeeComponent
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
<<<<<<< HEAD
  providers: [
    LoaderService,
    // Add HttpLoaderInterceptor to the providers array
    { provide: HTTP_INTERCEPTORS, useClass: HttpLoaderInterceptor, multi: true }
  ],
=======
  providers: [],
>>>>>>> 7021045d6852f3286ec79659cb237c6703133c45
  bootstrap: [AppComponent]
})
export class AppModule { }

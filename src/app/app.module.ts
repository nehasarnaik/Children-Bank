import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { AdminRequestsComponent } from './pages/admin/admin-requests/admin-requests.component';
import { AdminUsersComponent } from './pages/admin/admin-users/admin-users.component';
import { AdminDepositComponent } from './pages/admin/admin-deposit/admin-deposit.component';
import { AdminWithdrawComponent } from './pages/admin/admin-withdraw/admin-withdraw.component';
import { AdminTransactionsComponent } from './pages/admin/admin-transactions/admin-transactions.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminPageComponent,
    AdminProfileComponent,
    AdminRequestsComponent,
    AdminUsersComponent,
    AdminDepositComponent,
    AdminWithdrawComponent,
    AdminTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

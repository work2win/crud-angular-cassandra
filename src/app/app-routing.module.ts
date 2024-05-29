import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: 'transactions', component: TransactionsComponent},
  {path: 'transfer', component: AccountTransactionComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

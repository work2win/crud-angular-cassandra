import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';
import { AccountTransfer } from './accountTransfer';
import { Transaction } from './transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 

  constructor(private httpClient: HttpClient) { }

  getAllTransactions(): Observable<Transaction[]>{
    const url = "http://localhost:8080/transaction";    
    return this.httpClient.get<Transaction[]>(url);
  }

  getAccount(): Observable<Account[]>{
    const url = "http://localhost:8080/accounts";
    return this.httpClient.get<Account[]>(url);
  }

  moneyTransfer(accountTransfer: AccountTransfer): Observable<AccountTransfer[]>{

    
    //const url = "http://localhost:8080/accountTransfer";
    console.log("inside moneyTransfer - object value"+accountTransfer.fromAccount+" "+accountTransfer.toAccount+" "+accountTransfer.amount+" "+accountTransfer.date);
    return this.httpClient.post<AccountTransfer[]>("http://localhost:8080/accountTransfer",accountTransfer);
  }
}

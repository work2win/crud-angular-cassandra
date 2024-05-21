import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}

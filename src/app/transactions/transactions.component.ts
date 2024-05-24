import { TransactionService } from './../transaction.service';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit{

  transactions!: Transaction[];
  

  constructor(private transactionService: TransactionService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getTransaction();
  }

  private getTransaction(){
    
     var i:number = 0;
     var j:number = 0;

    this.transactionService.getAllTransactions().subscribe(data => {
      
      this.transactions = data;
      j = this.transactions.length;

      for(i;i<j;i++){
        if(this.transactions[i].debit == '0') {
          this.transactions[i].debit = ' ';
        }
        else if(this.transactions[i].credit == '0') {
          this.transactions[i].credit = ' ';
      }
    }
    
    });
    
  }
}

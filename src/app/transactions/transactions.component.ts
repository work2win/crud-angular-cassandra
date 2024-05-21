import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
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
    
    this.transactionService.getAllTransactions().subscribe(data => {
      //console.log("data is "+data[0].accountnum);
      this.transactions = data;
      //console.log(this.transactions);

    });
    
  }
}

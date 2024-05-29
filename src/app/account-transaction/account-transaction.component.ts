import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountTransfer } from '../accountTransfer';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrl: './account-transaction.component.css'
})
export class AccountTransactionComponent implements OnInit{

  accounts!: Account[];
  accntnums: number[] = [];
  fromAccount: any = '1234';
  toAccount: any = '1234';
  
  accountTransfer: AccountTransfer = new AccountTransfer();
  
  constructor(private transactionService: TransactionService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getAccount();

    this.transactionService.getAccount().subscribe(data => {
     // console.log(data);
      this.accounts = data;
      //console.log(this.accounts.length);
      for (let i=0; i < this.accounts.length;i++) {
       // console.log(this.accounts[i].accountnum);
        this.accntnums[i] = this.accounts[i].accountnum;

        console.log ("account num XX"+this.accntnums[i]);
      }
      
    })
   
  }

  trans(){
    this.transactionService.moneyTransfer(this.accountTransfer).subscribe({
      next: data => console.log("data from trans meth"),
      error: err => console.log(err),
      complete: () => console.log("complete")
    });
   
  }

  onChanged(){
    
    console.log("onChanged"+this.fromAccount);
    console.log("hello");
    

  }
  private getAccount(){
    
    this.transactionService.getAccount().subscribe(data => {
      console.log(data);
      this.accounts = data;
    })
    
  }

  
  onSubmitTrans(){
    console.log("inside onSubmitTrans");
    
    this.trans();
  }
}

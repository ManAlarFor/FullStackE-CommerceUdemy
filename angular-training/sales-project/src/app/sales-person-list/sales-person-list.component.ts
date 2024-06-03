import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{

  //creating an array
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Peter","Parker","spider@gmail.com",4300) ,
    new SalesPerson("Ben","Riley","spaider@gmail.com",4300) ,
    new SalesPerson("Miguel","O'Hara","spide2099r@gmail.com",4300) ,
    new SalesPerson("Gwen","Stacy","drums@gmail.com",4300) ,
  ]

  constructor() {}

  ngOnInit(): void {
      
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showDefaultComponent:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  showSelectedComponent(){
    console.log("insdie chk");
  this.showDefaultComponent=false;
  }

}

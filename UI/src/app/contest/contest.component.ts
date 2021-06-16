import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Table } from 'primeng/table';
import {ContestService} from './contest.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  show:boolean=false; 
  flow:string="heelo hii"; 
  data:any;
  error:any;
  loading: boolean = true;  
  checked: boolean = false;
  recievedData:any[]=[];



  constructor(private router:Router,private contestService:ContestService) { }
  

  ngOnInit(): void {
    this.contestService.getAllContests().subscribe(
      success=>{this.recievedData=success;console.log(this.recievedData);this.data=this.recievedData;this.loading=false;},
      error=>this.error=error
    );
  }
  
  movetoPlatform(selectedPlatform:String){
    this.show=true;
    let url='/platform/'+selectedPlatform;
    this.router.navigate([url],{state:{data:this.recievedData}});
  }

  filterTable($event: any, mytable: Table) {
   mytable.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  func(myval:any){
    return (new Date()<=new Date(myval.start_time));
  }

  handleSwitchChange(){
    if(this.checked){
      this.data=this.recievedData.filter(this.func);
      console.log(this.data);
    }
    else{
      this.data=this.recievedData;
    }
  }

}

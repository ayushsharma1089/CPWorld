import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@material-ui/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  
  constructor(private router:Router) {

   }

  ngOnInit(): void {
    console.log(this.router.url,"   ;;;;;   ");
    var url=this.router.url;
    var params=url.split("/");
    console.log(params[2]);
    
     console.log(history.state.data);
  }

}

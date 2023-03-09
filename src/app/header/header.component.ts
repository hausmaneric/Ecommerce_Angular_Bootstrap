import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  id:any;
  constructor(){}

  ngOnInit(){}

  drop(param:any){
    if(this.id == param){
      this.id = "";
    }else{
      this.id = param;
    }

  }
}

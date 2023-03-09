import { Component } from '@angular/core';

@Component({
  selector: 'app-card-bs',
  templateUrl: './card-bs.component.html',
  styleUrls: ['./card-bs.component.css']
})
export class CardBsComponent {

  constructor(){}

  ngOnInit(){

  }

  url: string = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQodjK-6HtBeC3p7wFC5LjZfZNcWt1DRWWxonY_AGcBSP32wmIgOx4ClFDE01ekxlBFVeqOC6LQR3bxKm4HRsw2tUlk7B64H9nsGXOQA3icC0Ny2xzJ2wANbZ228tBG&usqp=CAE";
  imageChange(event: any){
      this.url = event.target.src;
  }
}

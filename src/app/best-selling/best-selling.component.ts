import { Component } from '@angular/core';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrls: ['./best-selling.component.css']
})
export class BestSellingComponent {
  days!: any;
  hours!: number;
  mins!: number;
  secs!: number;

  constructor(){}

  ngOnInit(){}

  content: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum iste similique natus ex,
            consequuntur dolores, reprehenderit ducimus eius perferendis deleniti! Vero quas
            voluptatum odit quae placeat deleniti voluptate deserunt.`;

  x = setInterval(() => {
    this.countDownTimer();
  },1000)

  countDownTimer(){
    var futureDate = new Date("Jan 4, 2024 15:34:24").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance/(1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    this.secs = Math.floor((distance % (1000 * 60)) / (1000 ));

    if(distance < 0){
      clearInterval(this.x);
      this.days = "Offer is Expired";
      this.hours = 0;
      this.mins = 0;
      this.secs = 0;
    }

  }

}

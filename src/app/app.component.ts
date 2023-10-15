import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i = 0;
  color = ""
  source = "https://fastly.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ"
  title = 'carousels';
  arr = ["https://fastly.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ","https://fastly.picsum.photos/id/494/200/200.jpg?hmac=U0wPc_GayOgCTqCyWzhy9Cc_mj8wZEPjLdqILTEl4AM","https://fastly.picsum.photos/id/492/200/200.jpg?hmac=XU2aUuiOp-6a1CXwWFsbEobU3xA-9upNSkJiJacygTM"]
  left(){
    this.source = this.arr[(this.i-1+3)%3]
    if(this.i == 0)
      this.i = 2
    else
      this.i = this.i -1;

    console.log("left")
  }

  right(){
    this.source = this.arr[(this.i+1)%3]
    if(this.i == 2)
      this.i = 0
    else
      this.i = this.i + 1;
    console.log("right")
  }

  fxn(event:any){
    var target =  event.currentTarget;
    console.log(target.id)
    this.source = this.arr[target.id]
    this.color = "black"
  }

  
}

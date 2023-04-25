import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  name=""
  address=""
  username=""
  password=""

constructor(private api:ApiServiceService){}
  signup=()=>{
    let data:any={"name":this.name,"address":this.address,"username":this.username,"password":this.password}


    this.api.addCustomer(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("customer added successfully")
        }
        else{
          alert("something went wrong")
        }
      }
    )

    console.log(data)
  }



}

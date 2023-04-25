import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  username=""
  password=""
constructor(private api:ApiServiceService,private route:Router){}
  login=()=>{
    let data:any={"username":this.username,"password":this.password}

    this.api.customerLogin(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          this.route.navigate(['/login'])
        }
        else{
          alert("failed")
        }
      }
    )
    console.log(data)
  }



}

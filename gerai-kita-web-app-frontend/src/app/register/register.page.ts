import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string =''
  memberName: string =''
  address: string =''
  memberImage:string=''
  email: string = ''
  memberPW: string =''

  service: RegisterService
  isLoading:boolean=false

  constructor(
    private router: Router,
    userservice: RegisterService ) { 
      this.service =  userservice
    }

  register(){
    if(this.username.length == 0){
        alert('username is required')
    }
    else if(this.memberName.length == 0){
        alert('name is required')
    }
    else if(this.address.length == 0){
        alert('address is required')
    }
    else if(this.memberImage.length == 0){
        alert('profile picture is required')
    }
    else if(this.email.length == 0){
        alert('email is required')
    }
    else if(this.memberPW.length ==0){
        alert('password is required')
    }
    else{
      this.service.addUsers(
      this.username,
      this.memberName,
      this.address,
      this.memberImage,
      this.email,
      this.memberPW)
      .subscribe((response)=>{
        if(response['status']=='success'){
          alert('you have successfully register')
          this.router.navigate(['/login'])
        }else{
          console.log(response['error'])
          alert('error')
          }
        }
      )
    }
  }

  ngOnInit() { }

}

import { LoginService } from './login.service';
import { Component,} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  email=''
  memberPW=''
  isLoading:boolean = false;
  
  constructor(
    private router: Router,
    private service: LoginService
  ) {}

  
  login(){
    this.isLoading = true

    if(this.email.length == 0){
      alert('email field can not be empty')
    }else 
    if(this.memberPW.length == 0){
        alert('password can not be empty')
    }else{
      this.service.login(this.email,this.memberPW).subscribe((response)=>{
      
      console.log(response)
      if(response['status'] =='success'){
        localStorage['login_status'] = '1'
        localStorage['email'] = response['data'][0].email
        localStorage['memberPW'] = response['data'][0].memberPW
        localStorage['flag'] = '0'
        this.isLoading = false
        this.router.navigate(['/home'])
        }else if(response['status']=='error'){
          alert('invaild email or password')
        }
      })
    }
  }
}

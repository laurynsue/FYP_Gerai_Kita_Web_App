import { Component } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements CanActivate {
  title = 'Gerai Kita';
  isLoggedIn = false
  search: String
  username:String

  status = localStorage['login_status']

  constructor(private router:Router){
    this.loadStatus()
  }

  canActivate(){  
    this.loadStatus()
    return true
  }
 
  loadStatus(){
    if(this.status == '1'){
      this.isLoggedIn = true
      this.username = localStorage['username']
    }
  }


  logout(){
    if(confirm('Are you sure to log out?')){
      this.isLoggedIn = false
      localStorage['login_status'] = '0'
      localStorage['username'] = null
      localStorage['memberID'] = null

      this.router.navigate(['/member/login'])
    }
  }

  onSearch(){
    localStorage['searchValue'] = this.search

    this.router.navigate(['/search/product'])
  }
}


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetProductService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  Allproducts: any[]
  username: any

  constructor(
    private productservice:GetProductService,
    private service:GetProductService,
    private router:Router) { 
    this.loadflag()
    
    if(localStorage['login_status']!='0')
    {
    this.username = localStorage['username']
    }
    productservice.getproduct().subscribe((response)=>{
    if(response['status']=='success'){
        this.Allproducts = response['data']      
    }
    else{
        alert('error')
        console.log(response['error'])
      }
    })
    this.loadAllProducts()
  }

  loadAllProducts() {
    this.service
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.Allproducts = response['data']
        } else {
          alert('error')
        }
      })
      localStorage['onBack'] = 'user'
    }


    loadflag(){
      if(localStorage['flag']=='0')
      {
          window.location.reload();
          localStorage['flag']='1'
      }
    }

    ngOnInit() {}


  OnSelectProduct(productID: number) {
    this.router.navigate(['/'+ productID])
  }

  gotoProductDetail(){
    this.router.navigate(['/product-detail']); 
  }
}

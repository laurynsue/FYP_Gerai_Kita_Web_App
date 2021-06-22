import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products: any[]

  constructor(
    private router: Router,
    productservice: ProductsService,
    private service : ProductsService
    ) {
      productservice.getproduct().subscribe((response)=>{
        if(response['status']=='success'){
          this.products = response['data']         
        }else{
          alert('error')
          console.log(response['error'])
        }
      })
      this.loadAllProducts()
    }

    dashboard(){
      this.router.navigate(['/home'])
    }


  loadAllProducts() {
    this.service
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          alert('error')
        }
      })
  }

  gotoProductDetail(){
    this.router.navigate(['/product-detail']); 
  }
}

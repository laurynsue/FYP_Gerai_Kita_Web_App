import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  
  product: any
  totalAmount:number
  productID: number
  sellerID:number
  currentNumber = 1;

  constructor(
    private service:ProductDetailService,
    private activateRoute:ActivatedRoute,
    private cartService: ProductDetailService,
    private route:Router
    ){
      this.productID = this.activateRoute.snapshot.params['productID']
      
      if(this.productID){
        this.service.getProduct(this.productID).subscribe(response => {
            if(response['status']=='success')
            {
                this.product = response['data'][0]
            }
        })
      }
    }

  increment () {
    this.currentNumber++;
  }

  decrement () {
    this.currentNumber--;
  }

  addToCart(){
    if(localStorage['login_status'] == '0'){
        alert('You need to login first.')
        this.route.navigate(['/member/login'])
    }else{
      if(confirm('Do you want to add items?')){
        this.sellerID = localStorage['sellerID']
        this.totalAmount = (this.product.productPrice * this.currentNumber)
        this.cartService.postInCart(this.currentNumber,this.totalAmount,this.sellerID,this.productID)
        .subscribe(response =>{
        if(response['status'] == 'success'){
            alert('Items added in your cart')
          }
        })
      }
    }
  }

  ngOnInit() {}

}

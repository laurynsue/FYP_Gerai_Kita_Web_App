import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  Cart:any
  TotalAmountOfProduct:number = 0;
  id = localStorage['id']
  empty: boolean
    
  constructor(
    private service:CartService,
    private activateRoute:ActivatedRoute,
    private route:Router,
    public alertController: AlertController
    ){
    this.loadProduct()
    }

  loadProduct(){
    this.service.getCart(this.id).subscribe(response =>{
      if(response['status'] == 'success'){
        this.Cart = response['data']
        //TO GET TOTAL MONEY AND SAVING
        if(this.Cart.length == 0){
            alert('your cart is empty')
            this.empty = true
        }else{
            alert('your items list')
            this.empty = false
        }
        for(let i = 0;i < this.Cart.length;i++){
          this.TotalAmountOfProduct = this.TotalAmountOfProduct + this.Cart[i].totalAmount                
        }
      }else{
          console.log(response['error'])
        }
    })
  }
  
  onEdit(id:number,tableid:number,quantity:number) {
      localStorage['orderDetailsTableID'] = tableid
      localStorage['quantity'] = quantity
      this.route.navigate(['/cartEdit/'+ id])
    }

  ngOnInit() { 
    if(localStorage['login_status'] != '1'){
      alert('you are not logged in')
      this.route.navigate(['/member/login'])
    }
  }

  async presentAlert(header:string,message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}

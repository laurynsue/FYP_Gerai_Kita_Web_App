import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProductDetailService {

    url = 'http://localhost:4000/product/'
    url1 ='http://localhost:4000/cart'

    constructor(private httpClient: HttpClient) { }
    

    getProduct(productID: number){
        return this.httpClient.get(this.url + productID)
    }

    postInCart(
        quantity:number,
        totalAmount:number,
        sellerID:number,
        productID:number){
        const body = {
            quantity:quantity,
            totalAmount:totalAmount,
            sellerID:sellerID,
            productID:productID
        }
        return this.httpClient.post(this.url1,body)
    }

}
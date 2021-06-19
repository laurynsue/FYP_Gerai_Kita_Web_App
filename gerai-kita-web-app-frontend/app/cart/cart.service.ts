  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CartService {

    url='http://localhost:4000/cart/addcart'

    constructor(private httpClient: HttpClient) { }
    
    getCart(username:string){      
        const body = {
            username:username
        }
        return this.httpClient.post(this.url,body)
    }
}
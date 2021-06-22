import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    http: HttpClient
    url = 'http://localhost:4000/product'

    constructor(httpClient: HttpClient, private router:Router) {
        this.http = httpClient
    }

     getAllProducts(){
        return this.http.get(this.url)
    }

    gotoProductDetail(){
        this.router.navigate(['/product-detail']); 
    }

     getproduct(){
        return this.http.get(this.url)
    }

    deleteProduct(productID: number) {
        return this.http.delete(this.url + '/delete/' + productID)
    }
}
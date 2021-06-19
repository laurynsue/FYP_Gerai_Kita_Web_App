import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  login(email: string, memberPW: string) {
    throw new Error('Method not implemented.');
  }
  
  http: HttpClient
  url = 'http://localhost:4000/member/login'

  constructor(httpClient: HttpClient) {
    this.http = httpClient
  }
  
  getAllProducts() {
    return this.http.get(this.url)
  }

  getUsers(){
    return this.http.get(this.url)
  }

  deleteProduct(productID: number) {
    return this.http.delete(this.url + '/' + productID)
  }
}
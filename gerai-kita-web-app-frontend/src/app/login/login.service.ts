import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    http: HttpClient
    url = 'http://localhost:4000/login'   //express port 4000


    constructor(private httpClient: HttpClient) {
        this.http = httpClient
    }
    
    login(email:String, memberPW:String){
        const body ={
            email:email,
            memberPW:memberPW
        }
        return this.http.post(this.url,body)
    }

}


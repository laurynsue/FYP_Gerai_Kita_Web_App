import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    http: HttpClient
    url = 'http://localhost:4000/member/register'

     constructor(httpClient: HttpClient) {
        this.http = httpClient
     }
     
    addMembers( 
        username: string,
        memberName: string,
        memberAddress: string,
        memberImage: string,
        email: string ,
        memberPW: string){
        
        const body = {
            username: username,
            memberName:memberName,
            memberAddress:memberAddress,
            memberImage:memberImage,
            email:email,
            memberPW:memberPW
        }
        return this.http.post(this.url, body)
    } 
}

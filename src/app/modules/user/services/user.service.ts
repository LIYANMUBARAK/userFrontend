import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
  }
  readonly apiUrl='http://localhost:3000';

  login(userDetails:any){
   return this.http.post(`${this.apiUrl}/login`,userDetails)
  }

  getUser(phonenumber:Number){
    return this.http.get(`${this.apiUrl}/getUser/${phonenumber}`)
  }
}

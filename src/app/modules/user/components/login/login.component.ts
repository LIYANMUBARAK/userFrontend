import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup

  constructor(private userService:UserService){
    this.loginForm = new FormGroup({
      name:new FormControl(''),
      password:new FormControl('')
    })
  }



  login(){
    const userDetails = this.loginForm.value
    console.log(userDetails)
    this.userService.login(userDetails).subscribe((res:any)=>{
      localStorage.setItem('name',res.name)
      localStorage.setItem('token',res.token)
    })
  }
}

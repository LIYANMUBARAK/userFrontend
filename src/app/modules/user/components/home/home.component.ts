import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userService:UserService){}
ngOnInit(){
  this.userService.getUser(9995365499).subscribe((res)=>{
    console.log("finish"+res)
  })
}
}

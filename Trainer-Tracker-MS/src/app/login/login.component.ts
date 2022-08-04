import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string='';
  password:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.username=="admin@gmail.com"&&this.password=="asdf"){
      alert('Successfully!!');
      this.router.navigate(['/home']);
      
    }
    else
    {
      alert('Your Username and password are unsuccessfully!!');
    }
  }

}

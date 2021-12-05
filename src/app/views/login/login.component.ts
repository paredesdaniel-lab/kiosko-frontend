import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void{
    
  }
  iniciarSesion(){
    this.router.navigateByUrl('/dashboard')
  }
 }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  hide = false;
  hide2 = true;
  matNoti = 0;
  nroProductos = 0
  nroInsumos = 0

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigateByUrl('/home')
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {
  photo = 'https://images.unsplash.com/photo-1627896248725-0a4171d10d4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
  checked = 'false';
  unchecked = 'false';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next(): void{
    this.router.navigateByUrl('/second').then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}

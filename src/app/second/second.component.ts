import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass']
})
export class SecondComponent implements OnInit {
  photo = 'https://images.unsplash.com/photo-1627896248725-0a4171d10d4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';
  checked = false;
  unchecked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  prev(): void{
    this.router.navigate(['first']);
  }

  next(): void{
    this.router.navigate(['third']);
  }
}

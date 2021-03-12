import { Component, OnInit } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  users = users;

  count: number = 0;

  list = 'List of users';

  parent() {
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

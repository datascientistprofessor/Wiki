import { findLast } from '@angular/compiler/src/directive_resolver';
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

  parent() {
    this.count++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

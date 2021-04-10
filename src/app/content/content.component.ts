import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ActivatedRoute.snapshot.data);
  }

}

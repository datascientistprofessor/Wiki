import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { users } from '../users';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Output() countEvent = new EventEmitter();

  users = users;

  name: string = ''  ; 
  lastName: string = ''; 
  email: string = ''; 

  vote: number = 0.834;

  constructor(private loggingService: LoggingService) { }

  callParent(): void {
    this.users.unshift({ name: this.name, lastName: this.lastName, email: this.email })
    alert('The data were successfully added!')
    this.countEvent.emit();
    this.loggingService.logName(this.name, this.lastName, this.email);
  }
  
  Counter = 0;

  like() {
  this.Counter++;
  }
  dislike() {
  this.Counter--;
  }

  ngOnInit(): void {
  }

}

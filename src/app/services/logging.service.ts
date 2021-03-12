import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
    logName(message: string, message1: string, message2: string) {
        console.log('The data was sended to a console!');
        console.log('Name :', message);
        console.log('Surname :', message1);
        console.log('Email :', message2);
    }
}
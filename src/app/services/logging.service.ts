import {Injectable} from "@angular/core";

@Injectable()
export class LoggingService {
    logName(message: string) {
        let currentTime = new Date();
        let currentTimeString = currentTime.toDateString() + currentTime.getTime();
        console.log('${currentTimeString} :', message);
    }
}
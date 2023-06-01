import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(message: string) {
    console.log(message);
  }
  logError(message: string) {
    console.log(message);
  }
  logInfo(message: string) {
    console.log(message);
  }
  logDebug(message: string) {
    console.debug(message);
  }
  logWarning(message: string) {
    console.warn(message);
  }

}
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(text : string):void{
    console.log(text);
  }
}

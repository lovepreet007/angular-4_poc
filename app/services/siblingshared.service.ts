import {Injectable} from '@angular/core';

@Injectable()
export class SiblingService {
    dataArray: string[] = [];

    insertData(data: string){
        this.dataArray.push(data);
    }
}
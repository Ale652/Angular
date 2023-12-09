import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { UtilService } from '../services/util.service';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    constructor() { }

    private initialType = 'f';
    private type = new BehaviorSubject<string>(this.initialType);

    getTypeUnit(): Observable<string> {
        return this.type.asObservable();
    }

    toggleTypeUnit(type: string): void {
        this.type.next(type);
    }

}
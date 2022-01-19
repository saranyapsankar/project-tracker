import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class EventManagerService {
    private projectSubject = new Subject<any>(); // subject should always be private and never be exposed.
    private project$: Observable<any>
        = this.projectSubject.asObservable(); // observables should only be exposed via Getters (methods)

    constructor() {
    }

    getProjectValObservable(): Observable<any> {
        return this.project$;
    }
    emitProjectValObservable(value: any) {
        this.projectSubject.next(value);
    }

}

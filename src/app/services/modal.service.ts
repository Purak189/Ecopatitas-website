import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _modal = new BehaviorSubject<any>(null);
  onModal = () => this._modal.asObservable();

  modalOpen(value: any = null) {
    this._modal.next(value);
  }
}

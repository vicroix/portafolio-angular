import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbrirModalImgService {
  constructor() {}

  private _data = new Subject<string[]>();
  data$ = this._data.asObservable();

  emit(data: string[]) {
    this._data.next(data);
  }
}

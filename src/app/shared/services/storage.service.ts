import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  public setItemStorage(
    key: string,
    value: string,
    storage = 'localStorage'
  ): boolean {
    window[storage].setItem(key, value);
    return true;
  }

  public getValueFromKeyStorage(key: string, storage = 'localStorage'): string {
    return window[storage].getItem(key);
  }

  public clearStorage(storage = 'localStorage'): void {
    window[storage].clear();
  }

  public removeItemStorage(key: string, storage = 'localStorage'): void {
    window[storage].removeItem(key);
  }
}

import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  constructor() {}

  setObject(key: string, value: any) {
    return new Promise(resolve => {
      window.localStorage.setItem(key, JSON.stringify(value));
      resolve(value);
    });
  }

  getObject(key: string) {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(window.localStorage.getItem(key)));
    });
  }

  set(key: string, value: any) {
    return new Promise(resolve => {
      window.localStorage.setItem(key, value);
      resolve(value);
    });
  }

  get(key: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      resolve(window.localStorage.getItem(key));
    });
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }

  clear() {
    return new Promise((resolve, reject) => {
      window.localStorage.clear();
      resolve();
    });
  }

  updateObject(key: string, data: any) {
    return new Promise(resolve => {
      this.getObject(key).then((_extraData: any) => {
        let _data = _extraData ? { ..._extraData, ...data } : data;
        this.setObject(key, _data).then((statusSet: any) => {
          resolve(statusSet);
        });
      });
    });
  }
}

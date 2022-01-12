
export interface IStorageItem {
    key: string;
    value: any;
}

export class StorageItem {
    key: string;
    value: any;

    constructor(data: IStorageItem) {
        this.key = data.key;
        this.value = data.value;
    }
}

export const LocalStorageWorker = () => {
    let localStorageSupported= typeof window['localStorage'] != 'undefined' && window['localStorage'] != null;

    const add = (key: string, item: string) => {
      if (localStorageSupported) {
        localStorage.setItem(key, item);
      }
    }

    const getAllItems = (): Array<StorageItem> => {
      const list = new Array<StorageItem>();

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) || '';
        const value = localStorage.getItem(key);

        list.push(
          new StorageItem({ key, value })
        );
      }

      return list;
    }

    const getAllValues = (): Array<any> => {
      const list = new Array<any>();

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) || '';
        const value = localStorage.getItem(key);

        list.push(value);
      }

      return list;
    }

    const get = (key: string): string | null => {
      if (localStorageSupported) {
        const item = localStorage.getItem(key) || '';
        return item;
      } else {
        return null;
      }
    }

    const remove = (key: string) => {
      if (localStorageSupported) {
        localStorage.removeItem(key);
      }
    }

    const clear = () => {
      if (localStorageSupported) {
        localStorage.clear();
      }
    }

    return {
      add, 
      getAllItems,
      getAllValues,
      get,
      remove,
      clear
    }
}
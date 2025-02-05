import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Item {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];

  getItems(): Observable<Item[]> {
    return of(this.items);
  }

  getItem(id: number): Observable<Item | undefined> {
    return of(this.items.find(item => item.id === id));
  }
}
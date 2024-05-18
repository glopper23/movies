import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { ShelfLevel } from '../components/shelf-levels/shelf-levels.model';

@Injectable({providedIn: 'root'})
export class MovieService {
  selectedIndex = 0;
  indexChanged = new Subject<number>();

  changeSelectedIndex(newRow: number, newIndex: number, shelveItemNumber: number) {
      this.selectedIndex = (newRow*shelveItemNumber) + newIndex;
    this.indexChanged.next(this.selectedIndex);
  }
}

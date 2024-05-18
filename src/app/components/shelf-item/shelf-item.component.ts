import { Component, Input } from '@angular/core';
import { ShelfItem } from './shelf-item.model';

@Component({
    selector: 'shelf-item',
    templateUrl: './shelf-item.component.html',
    styleUrls: ['./shelf-item.component.scss'],
  })
  export class ShelfItemComponent {
    @Input() item: ShelfItem = {
        cover: '',
    director: '',
    movieName: '',
    case: '',
    trailer: '',
    description: '',
scene: '',
protagonists: [],
    }

    ngOnInit() {
      console.log('this.item', this.item);
    }
  }